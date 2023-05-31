import Title from './title';
import ModuleDetails from './moduleDetails';
import { getAge } from '../utils/age';
import User from './user';

// const name = 'Otaciso Silva';
const ani = '01/08/1988';
const ages = getAge(ani);

function HelloWorld() {
  return (
    <div>
      <h1>
        Óla,
        {' '}
        <User />
      </h1>
      <Title />
      <ModuleDetails />
      <p>{`Age ${ages}`}</p>
    </div>
  );
}

export default HelloWorld;
