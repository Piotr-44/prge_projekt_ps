import React from "react";
import "./About.css";
import Services_icon from "../tmp/services_shortcut.png";
import { Link } from "react-router-dom";
import MapEmployee from "../map_employees/Map_employee"; // Upewnij się, że importujesz poprawny komponent

function About() {
  return (
    <div className="background">
      <div className="about_title">O portalu</div>
      <div className="services_return">
        USŁUGI
        <Link to="/services">
          <img className="services_icon" src={Services_icon} alt="services" />
        </Link>
      </div>
      <div className="portal_details">
        Stworzony geoportal jest zaawansowaną platformą geoinformacyjną
        stworzoną w celu dostarczenia użytkownikom kompleksowych i aktualnych
        danych przestrzennych dotyczących zabezpieczenia medycznego. Głównym
        celem portalu jest umożliwienie dostępu do informacji o lokalizacjach
        stacji medycznych, zgłoszeń medycznych oraz pracowników stacji, a także
        ułatwienie ich wizualizacji, analizy i wykorzystania w codziennej pracy
        oraz w podejmowaniu strategicznych decyzji.
        <p>
          <p className="bold">Warstwy Tematyczne</p>
          <p>
            Portal umożliwia dostęp do wielu warstw tematycznych związanych z
            zabezpieczeniem medycznym, które mogą być włączane i wyłączane
            zgodnie z potrzebami użytkownika. Każda warstwa zawiera szczegółowe
            informacje na temat obiektów, takich jak stacje medyczne, zgłoszenia
            medyczne oraz pracownicy stacji.
          </p>
          <p className="bold">Dane Przestrzenne z GeoServera</p>
          <p>
            Geoportal integruje się z GeoServerem, co pozwala na dynamiczne
            pobieranie i wyświetlanie danych przestrzennych z różnych źródeł.
            Dzięki temu użytkownicy mają dostęp do najbardziej aktualnych
            informacji, takich jak lokalizacje stacji pogotowia, zgłoszeń
            incydentów medycznych oraz informacje o pracownikach medycznych.
          </p>
          <p className="bold">Personalizowane Ikony i Wyskakujące Okienka</p>
          <p>
            Aby ułatwić interpretację danych, obiekty na mapie są oznaczane za
            pomocą spersonalizowanych ikon, a kliknięcie na dowolny obiekt
            wyświetla wyskakujące okienko z dodatkowymi informacjami. Dzięki
            temu użytkownicy mogą szybko uzyskać szczegółowe informacje o
            wybranych miejscach i obiektach medycznych.
          </p>
          <p className="bold">Interaktywne Mapy</p>
          <p>
            Nasz Geoportal oferuje interaktywne mapy, które pozwalają
            użytkownikom na przeglądanie i analizowanie danych przestrzennych w
            intuicyjny sposób. Możesz korzystać z różnych podkładów mapowych,
            takich jak OpenStreetMap, Google Satellite czy OpenTopoMap, aby
            dostosować widok mapy do swoich potrzeb.
          </p>
        </p>
        <div className="map_container">
          <MapEmployee isAbout={true} /> {/* Przekaż isAbout jako props */}
        </div>
      </div>
    </div>
  );
}

export default About;
