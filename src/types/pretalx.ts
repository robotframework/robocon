export type Speaker = {
  code: string;
  name: string;
  biography: string;
  avatar: string | null;
};

type Slot = {
  room_id: number;
  room: LocalizedString;
  start: string; // ISO 8601 date string
  end: string;   // ISO 8601 date string
};

type ProposalState = "confirmed" | "pending" | "rejected";

type LocalizedString = { en: string }

type SubmissionType = { en: "Talk" | "PreRecorded-Talk" | "Workshop - Full Day" | "Tutorial" }

export type PretalxEvent = {
  code: string;
  speakers: Speaker[];
  title: string;
  submission_type: SubmissionType;
  submission_type_id: number;
  track: string | null;
  track_id: number | null;
  state: ProposalState;
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
};

export type PretalxSession = {
  code: string;
  speakers: Speaker[];
  title: string;
  submission_type: SubmissionType;
  submission_type_id: number;
  track: string | null;
  track_id: number | null;
  state: ProposalState;
  abstract: string;
  description: string;
  duration: number;
  slot_count: number;
  do_not_record: boolean;
  is_featured: boolean;
  content_locale: string;
  slot: Slot | null;
  image: string | null;
  // resources: Resource[];
  // answers: Answer[];
};

export type ScheduleResponse = {
  slots: PretalxEvent[];
  breaks: Break[];
}

export type SubmissionsResponse = {
  results: PretalxSession[];
}

export type Break = {
  room?: {
      en: string;
  };
  room_id?: number;
  start: string; // ISO 8601 date string
  end: string;   // ISO 8601 date string
  description: {
      en: string;
  };
}

export type BreakParsed = {
  room?: {
      en: string;
  };
  room_id?: number;
  slot: Slot;
  description: {
      en: string;
  };
  submission_type: {en: 'Break'};
}
