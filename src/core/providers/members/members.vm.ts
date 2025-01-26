export interface MemberEntity {
  id: string;
  login: string;
  avatar_url: string;
}

export interface MembersContextModel {
  members: MemberEntity[];
  organization: string;
  setOrganization: (org: string) => void;
  error: string;
}