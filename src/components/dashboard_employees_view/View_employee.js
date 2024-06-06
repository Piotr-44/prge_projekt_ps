import React from "react";
import ActionAreaCard from "./Mcard";
import "./View_employee.css";
import Map_icon from "../tmp/map_button_img.png";
import Services_icon from "../tmp/services_shortcut.png";
import Btn_employee_list from "../tmp/list.png";
import { Link } from "react-router-dom";

function Dashboard() {
  const input_list = [
    {
      name: "Maciej",
      surname: "Malinowski",
      content: "Ratownik medyczny",
      image:
        "https://d3npyywa6qnolf.cloudfront.net/prod/user/375128/eyJ1cmwiOiJodHRwczpcL1wvcGF0cm9uaXRlLnBsXC91cGxvYWRcL3VzZXJcLzM3NTEyOFwvbWVkaWFcLzE2ODg1NDU4MTZfNjRhNTJhMTgwYjU3OS5qcGciLCJlZGl0cyI6eyJqcGVnIjp7Im9wdGlvbnMiOnsicXVhbGl0eSI6OTV9fX19/LAPg2t3YJqUqZfGXvV4YeVe4rj6vQJtS5vX2JGUmVlQ%3D",
    },
    {
      name: "Stanisław",
      surname: "Król",
      content: "Ratownik medyczny",
      image:
        "https://bi.im-g.pl/im/97/2a/1a/z27435671AMP,Pawel-Zaworski-z-Wojewodzkiej-Stacji-Pogotowia-Rat.jpg",
    },
    {
      name: "Paulina",
      surname: "Brzoza",
      content: "Ratownik medyczny",
      image:
        "https://studia.studentnews.pl/img/wo/7/49/Katarzyna-Jesionowska-WUM-fot-Krzysztof-obrazek_sredni_4471749.jpg",
    },
    {
      name: "Albert",
      surname: "Kola",
      content: "Ratownik medyczny",
      image:
        "https://ocdn.eu/images/pulscms/MDA7MDA_/7488499d86afd7e9469e0dbf8a476b34.jpg",
    },
    {
      name: "Jacek",
      surname: "Placek",
      content: "Kardiolog",
      image:
        "https://alfa-lek.pl/media/u/i/lekarzenowy/_350x350/siamianowskicezary.jpg",
    },
    {
      name: "Karol",
      surname: "Dąb",
      content: "Kardiolog",
      image:
        "https://s3-eu-west-1.amazonaws.com/znanylekarz.pl/doctor/a49133/a4913373fd20ac81064d766de6af3f79_large.jpg",
    },
    {
      name: "Tomasz",
      surname: "Malina",
      content: "Neurolog",
      image:
        "https://s3-eu-west-1.amazonaws.com/znanylekarz.pl/doctor/1d9111/1d9111fbda4bc448d7afa6a062fcadf4_large.jpg",
    },
    {
      name: "Malwina",
      surname: "Drozd",
      content: "Kardiolog",
      image:
        "https://www.neomedica.pl/wp-content/uploads/2022/08/Katarzyna_Jurkiewicz_neurolog-1024x1024.jpg",
    },
  ];

  return (
    <div>
      <div className="backgr2">
        <div className="employee_view_title">Pracownicy stacji pogotowia</div>
        <div className="services_return2">
          USŁUGI
          <Link to="/services">
            <img className="services_icon2" src={Services_icon}></img>
          </Link>
          <Link to="/map_employees">
            <img className="btn_map_from_list2" src={Map_icon}></img>
          </Link>
          <Link to="/dashboard_employees_list">
            <img className="employee_list_icon2" src={Btn_employee_list}></img>
          </Link>
        </div>

        {input_list.map((item) => {
          return (
            <ActionAreaCard
              name={item.name}
              surname={item.surname}
              content={item.content}
              image={item.image}
            />
          );
        })}
        <ActionAreaCard />
      </div>
    </div>
  );
}

export default Dashboard;
