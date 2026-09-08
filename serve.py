#!/usr/bin/env python3
"""Local dev server for the archive.

    python3 serve.py            # http://127.0.0.1:8099
    python3 serve.py 3001       # another port

`python3 -m http.server` is enough to look at a year's front page, but it gets
one thing wrong that matters: every year from 2022 on is a single-page app whose
router owns paths like /2023/sponsor. Opening one of those directly -- or just
reloading the page after clicking through -- returns 404 there, while on Vercel
it works. That difference would send you hunting for a bug that does not exist.

So this mirrors the two rules in vercel.json and nothing else:

  * an unmatched /<year>/<path> falls back to /<year>/index.html, after the
    filesystem has been checked, so real assets still win
  * anything under a year answers with X-Robots-Tag: noindex, nofollow

It is a development convenience, not a deployment target.
"""

import http.server
import os
import re
import socketserver
import sys

PORT = int(sys.argv[1]) if len(sys.argv) > 1 else 8099
ROOT = os.path.dirname(os.path.abspath(__file__))

# Mirrors "/:jahr(20[0-9]{2})/:path*" from vercel.json.
YEAR_PATH = re.compile(r'^/(20[0-9]{2})(/.*)?$')


class ArchiveHandler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=ROOT, **kwargs)

    def send_response(self, code, message=None):
        super().send_response(code, message)
        # Header rule from vercel.json: the archived builds still carry
        # canonical tags claiming to be robocon.io, so they stay unindexed.
        if YEAR_PATH.match(self.path.split('?')[0]):
            self.send_header('X-Robots-Tag', 'noindex, nofollow')

    def do_GET(self):
        self._rewrite()
        super().do_GET()

    def do_HEAD(self):
        self._rewrite()
        super().do_HEAD()

    def _rewrite(self):
        """Fall back to the year's index.html when nothing is on disk."""
        path = self.path.split('?')[0]
        match = YEAR_PATH.match(path)
        if not match:
            return

        on_disk = self.translate_path(path)
        # A directory is fine: SimpleHTTPRequestHandler serves its index.html.
        if os.path.exists(on_disk):
            return

        self.path = f'/{match.group(1)}/index.html'

    def log_message(self, fmt, *args):
        sys.stderr.write(f'{self.address_string()} {fmt % args}\n')


class Server(socketserver.ThreadingTCPServer):
    allow_reuse_address = True
    daemon_threads = True


if __name__ == '__main__':
    with Server(('127.0.0.1', PORT), ArchiveHandler) as httpd:
        print(f'RoboCon archive  ->  http://127.0.0.1:{PORT}/   (Strg+C beendet)')
        try:
            httpd.serve_forever()
        except KeyboardInterrupt:
            print('\nbeendet')
