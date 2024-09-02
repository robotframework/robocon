
import { isAfter, isBefore } from "date-fns";

test('should return isBefore true/false', () => {
  const cases = [
    [
      '2024-08-30T00:00+03:00',
      '2024-09-14T00:00+03:00',
      true
    ],
    [
      '2024-09-14T00:00+03:00',
      '2024-11-12T00:00+03:00',
      true
    ],
    [
      '2024-11-12T00:00+03:00',
      '2024-12-14T00:00+03:00',
      true
    ],
    [
      '2024-12-14T00:00+03:00',
      '2025-02-14T00:00+03:00',
      true
    ],
    [

      '2024-12-14T00:00+03:00',
      '2025-03-07T00:00+09:00',
      true
    ]
  ]

  cases.forEach(([a, b, answer]) => {
    const result = isBefore(a, b);
    expect(result).toBe(answer);
  })
})

test('should return isAfter true/false', () => {
  const cases = [
    [
      '2024-08-30T00:00+03:00',
      '2024-09-14T00:00+03:00',
      false
    ],
    // [
    //   '2024-09-14T00:00+03:00',
    //   '2024-11-12T00:00+03:00',
    //   false
    // ],
    // [
    //   '2024-11-12T00:00+03:00',
    //   '2024-12-14T00:00+03:00',
    //   false
    // ],
    // [
    //   '2024-12-14T00:00+03:00',
    //   '2025-02-14T00:00+03:00',
    //   false
    // ],
    // [

    //   '2024-12-14T00:00+03:00',
    //   '2025-03-07T00:00+09:00',
    //   false
    // ]
  ]

  cases.forEach(([a, b, answer]) => {
    const result = isAfter(a, b);
    expect(result).toBe(answer);
  })
})