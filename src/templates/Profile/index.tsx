import { useRouter } from "next/router";

import { Container } from "components/Container";
import Heading from "components/Heading";
import ProfileMenu from "components/ProfileMenu";
import { ReactNode } from "react";
import Base from "templates/Base";

import * as S from "./styles";

export type ProfileTemplateProps = {
  children: ReactNode;
};

const Profile = ({ children }: ProfileTemplateProps) => {
  const { asPath } = useRouter();

  console.log(asPath);

  return (
    <Base>
      <Container>
        <Heading lineLeft lineColor="secondary">
          My profile
        </Heading>
        <S.Main>
          <ProfileMenu activeLink={asPath} />

          <S.Content>{children}</S.Content>
        </S.Main>
      </Container>
    </Base>
  );
};

export default Profile;
