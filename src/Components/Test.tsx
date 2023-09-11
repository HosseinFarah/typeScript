interface Props {
  name: string;
  email: string;
  age: number;
  isMarried: boolean;
  courses: string[];
}

export const Test = (props: Props) => {
  return (
    <div className="container">
      <h5>Name: {props.name}</h5>
      <h5>Email: {props.email}</h5>
      <h5>Age: {props.age}</h5>
      <h5>Married: {props.isMarried ? "Yes" : "No"}</h5>
      <h5>Courses List:</h5>
      <ul>
        {props.courses.map((course: string, index: number) => (
          <li key={index}>{course}</li>
        ))}
      </ul>
    </div>
  );
};
