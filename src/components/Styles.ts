import styled from "styled-components";

const Layout = styled.div`
  max-width: 100%;
  max-height: 100%;
  width: 100vw;
  height: 100vh;
  margin: 0 auto;
  background-color: #077687;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 640px) {
    flex-direction: column;
    justify-content: flex-start;
    height: 100%;
  }
`;

const MainContaier = styled.div`
  max-width: 320px;
  margin: 0 10px;
`;

const PlayField = styled.div`
  width: 320px;
  height: 320px;
  margin: 0;
  border: 1px dotted white;

  @media screen and (max-width: 640px) {
    height: auto;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

const Text = styled.p`
  margin: 0;
  padding: 0;
  color: #fff;
  font-family: -apple-system, "Roboto", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
`;

const Title = styled(Text)`
  padding-bottom: 5px;
  border-bottom: 1px solid grey;
  text-align: center;
  font-size: 24px;
`;

const Subtitle = styled(Text)`
  margin-top: 60px;
  font-size: 20px;
`;

const Info = styled(Text)`
  margin-top: 10px;
`;

const Notifications = styled(Text)`
  padding-top: 5px;
  border-top: 1px solid grey;
  text-align: center;
`;

const Decor = styled.img.attrs((props) => ({
  src: props.src,
  alt: props.alt || "",
}))`
  width: 130px;
  height: auto;
  margin: 0 10px;

  @media screen and (max-width: 640px) {
    width: 90px;
    margin: 20px;
  }
`;

export {
  Layout,
  MainContaier,
  PlayField,
  Text,
  Title,
  Subtitle,
  Info,
  Notifications,
  Decor
}