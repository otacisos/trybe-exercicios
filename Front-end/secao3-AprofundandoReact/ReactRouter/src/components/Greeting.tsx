type GreetingProps = {
  name: string
};

function Greeting({ name }: GreetingProps) {
  return (
    <h1>{`Meu nome é ${name}`}</h1>
  );
}

export default Greeting;
