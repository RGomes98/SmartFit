export type Weekdays = 'Seg. à Sex.' | 'Sáb.' | 'Dom.' | 'Obs.:' | 'Seg. às Sex.';
export type LockerRoom = 'allowed' | 'closed' | 'partial';
export type Fountain = 'partial' | 'not_allowed';
export type Mask = 'required' | 'recommended';

export type BranchFilterSettings = {
  timeOfDay: ('morning' | 'afternoon' | 'night') | null;
  branchCount: number;
  isClosedBranchFilterActive: boolean;
};

export type Response = {
  current_country_id: number;
  locations: Location[];
  wp_total: number;
  total: number;
  success: boolean;
};

export type Location = {
  id: number;
  title: string;
  content?: string;
  opened?: boolean;
  mask?: Mask;
  towel?: Mask;
  fountain?: Fountain;
  locker_room?: LockerRoom;
  schedules?: Schedule[];
  street?: string;
  region?: string;
  city_name?: string;
  state_name?: string;
  uf?: string;
};

export type Schedule = {
  weekdays: Weekdays;
  hour: string;
};
