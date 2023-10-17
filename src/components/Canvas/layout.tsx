import * as S from "./styled";

export const Canvas = () => {
  return (
    <S.Wrapper>
      <S.StartName>
        <S.Name>Create 3 start points </S.Name>
        <S.Point>.</S.Point>
        <S.Point>.</S.Point>
        <S.Point>.</S.Point>
      </S.StartName>
      <canvas />
    </S.Wrapper>
  );
};
