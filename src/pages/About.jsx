import { Outlet, Link } from 'react-router-dom';

export const About = () => {
  return (
    <div>
      <h1>About page</h1>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio delectus
        placeat necessitatibus! Iste ipsa laudantium magnam quae expedita?
        Eveniet recusandae laborum placeat ullam earum ipsa aliquam numquam
        saepe soluta officia. Lorem, ipsum dolor sit amet consectetur
        adipisicing elit. Optio delectus placeat necessitatibus! Iste ipsa
        laudantium magnam quae expedita? Eveniet recusandae laborum placeat
        ullam earum ipsa aliquam numquam saepe soluta officia. Lorem, ipsum
        dolor sit amet consectetur adipisicing elit. Optio delectus placeat
        necessitatibus! Iste ipsa laudantium magnam quae expedita? Eveniet
        recusandae laborum placeat ullam earum ipsa aliquam numquam saepe soluta
        officia. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio
        delectus placeat necessitatibus! Iste ipsa laudantium magnam quae
        expedita? Eveniet recusandae laborum placeat ullam earum ipsa aliquam
        numquam saepe soluta officia.
      </p>
      <ul>
        <li>
          <Link to="mission">Read about our mission</Link>
        </li>
        <li>
          <Link to="team">Get to know the team</Link>
        </li>
        <li>
          <Link to="reviews">Go through the reviews</Link>
        </li>
      </ul>
      <Outlet />
    </div>
  );
};
