import { MemberDetail } from "./api.model";

export const getMemberDetail = (id: string): Promise<MemberDetail> =>
  fetch(`https://api.github.com/users/${id}`).then((response) =>
    response.json()
);
