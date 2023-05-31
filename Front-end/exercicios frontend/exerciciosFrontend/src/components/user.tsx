const user = {
  name: 'Otaciso',
  lasteName: 'Silva',
};

function User() {
  return <span>{`${user.name} ${user.lasteName}`}</span>;
}
export default User;
