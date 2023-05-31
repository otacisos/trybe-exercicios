import User from './user';

function Header() {
  // <>
  return (
    <head>
      <h1>
        Olá
        {' '}
        <User />
      </h1>
    </head>
  );
  // </>;
}
export default Header;
