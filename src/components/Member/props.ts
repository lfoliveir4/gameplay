export interface Member {
  id: string
  username: string
  avatar_url: string
  status: string
}

export interface MemberProps {
  data: Member
}
