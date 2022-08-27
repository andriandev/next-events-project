import Header from './Header';

function Main(props) {
  return (
    <>
      <Header />
      <main>{props.children}</main>
    </>
  );
}

export default Main;
