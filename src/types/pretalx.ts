type Speaker = {
  code: string;
  name: string;
  biography: string;
  avatar: string | null;
};

type Room = {
  en: string;
};

type Slot = {
  room_id: number;
  room: Room;
  start: string; // ISO 8601 date string
  end: string;   // ISO 8601 date string
};

export type PretalxEvent = {
  code: string;
  speakers: Speaker[];
  title: string;
  submission_type: { en: "Talk" | "PreRecorded-Talk" | "Workshop - Full Day" | "Tutorial" };
  submission_type_id: number;
  track: string | null;
  track_id: number | null;
  state: "confirmed" | "pending" | "rejected";
  abstract: string;
  description: string;
  duration: number;
  slot_count: number;
  do_not_record: boolean;
  is_featured: boolean;
  content_locale: string;
  slot: Slot | null;
  image: string | null;
  resources: string[];
  answers: string[];
  type: 'talk' | 'workshop'
};

export type ScheduleResponse = {
  slots: PretalxEvent[];
  breaks: Break[];
}

export type Break = {
  room: {
      en: string;
  };
  room_id: number;
  start: string; // ISO 8601 date string
  end: string;   // ISO 8601 date string
  description: {
      en: string;
  };
  type: 'break'
}
