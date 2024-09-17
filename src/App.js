// App.js

import React from 'react';
import './App.css';
import logo from './assets/logo2.webp';
import banner from './assets/banner4.webp';
import audrey1 from './assets/audrey4.webp';
import contact from './assets/contact2.png';
import service from './assets/service2.webp';

function App() {
  return (
    <div className="App">
      <header>
        <img src={logo} alt="Logo" className="logo" />
        <nav>
          <ul>
            <li><a href="#banner">Accueil</a></li>
            <li><a href="#about">A propos</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#tarifs">Tarifs</a></li>
            <li><a href="#avis">Avis</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
        <div className="separator"></div>
      </header>
      <main>
        <section id="banner" className="banner">
        <img src={banner} alt="banner" className="bannerimg"></img>
        </section>
        <section id="about" className="about-section">
          <article className='aboutcontainer'>
          <img src={audrey1} alt="Audrey" className="audrey1" />
          <div>
          <h2>«  Qui suis-je ? » </h2>
          <p> Ancienne formatrice et passionnée par la psychologie, les neurosciences et la nutrition, j’ai entrepris une reconversion professionnelle afin de vous accompagner dans vos objectifs (perte de poids, rééquilibrage alimentaire,…). Mon parcours dans ce domaine a débuté par une licence en psychologie comportementale. J’ai ensuite continué à me former et ai obtenu des certifications en Nutrition, en Gestion du Stress puis en Phytothérapie et Micro-nutrition. Afin de parfaire mes connaissances, je suis actuellement en train de passer le BTS diététique. </p>

<p> Hippocrate a dit «  Que l’alimentation soit ta première médecine. » Il précise bien la « première » et non la seule ! Trop souvent, on pense que la nutrition et l’alimentation suffisent en terme de prévention en oubliant les dimensions psychologiques et physiologiques qui sont propres à chacun et qui participent à part égale à notre santé. Notre manière actuelle de vivre génère énormément de stress ce qui a un impact indéniable sur notre santé. Mon rôle est de vous accompagner à retrouver une qualité de vie et de poser les bases de la prévention en nutrition santé. </p>

<p> J’accompagne notamment des femmes ménopausée ou en péri-ménopause car c’est une période de grands bouleversements hormonaux qui nécessite une prise en charge particulière et adaptée. C’est un passage important qui marque pour moi un renouveau et dont il faut prendre soin !

</p>
</div>
</article>
        </section>
        <section id="services" className="services-section">
          <img src={service} alt="bulle de dialogue"></img>
          <h2>Services</h2>
          <p>Mon accompagnement ne se limite pas à de simples conseils nutritionnels, des recettes ou encore des listes de courses. Il s’agit d'une prise en charge globale. Lors de notre premier entretien, je vais notamment faire le bilan de votre santé en prenant en compte la méthode des 5 facteurs du vivant qui m’a été enseignée par le Dr Yann Rougier, médecin spécialiste en neurosciences. Le Dr Rougier explique entre autres que « Tout être vivant et humain respire, se nourrit, se protège, pense et ressent des émotions. » La nutrition ne représente qu’un seul de ses 5 facteurs, c’est pourquoi j’accompagne de manière plus globale car le stress peut avoir un impact non négligeable sur l’alimentation et inversement par exemple.


Le but de ce bilan est donc d’explorer votre santé dans son ensemble (qualité du sommeil, niveau de stress, troubles digestifs, etc.) afin de vous proposer un accompagnement 100% personnalisé et adapté à vos besoins tout en s'alignant avec vos objectifs.

</p>
        </section>
        <section id="tarifs" className="tarifs-section">
          <h2>Tarifs</h2>
          <div className='pack'>
          <ul>Pack Pleine Santé
<li>- Bilan Pleine Santé (étude des habitudes de vie, activité physique, nutrition, stress, sommeil)</li>
<li>- Rééquilibrage alimentaire adapté aux besoins et à la situation</li>
<li>- Outils de gestion du stress adaptés aux besoins et à la situation</li>
<li>- Deux séances de suivi de 45 minutes chacune</li>
<li>- Possibilité de me contacter 7j/7 entre 7h et 22h sur WhatsApp pour me poser des questions sur les aliments, la phytothérapie, me montrer les repas, etc.</li>
Prix de 99€/mois

</ul>


<ul>Pack Nutri Santé
<li>- Bilan Pleine Santé (étude des habitudes de vie, activité physique, nutrition, stress, sommeil)</li>
<li>- Rééquilibrage alimentaire adapté aux besoins et à la situation</li>
<li>- Outils de gestion du stress adaptés aux besoins et à la situation</li>
<li>- Deux séances de suivi d’une heure chacune</li>
<li>- Possibilité de me contacter 7j/7 entre 7h et 22h sur WhatsApp pour me poser des questions sur les aliments, la phytothérapie, me montrer les repas, etc.</li>
<li>- Compléments alimentaires adaptés aux besoins fournis de chez Actinutrition</li>
Prix de 135€/mois
</ul>
</div>
<h2>Consultations à la séance</h2>
<div className='consult'>

<ul>   
   <li>Première consultation de bilan diététique : découverte des besoins, du profil, des objectifs, élaboration du programme, etc. 
   </li>Pour un prix de 55€ la séance.
   </ul>

<ul>
<li>Consultation de suivi diététique : suivi du déroulement, réponses aux interrogations éventuelles, adaptation du programme, etc. 
</li>Pour un prix de 45€ la séance.</ul>
<ul>
<li>Les tarifs réduits (consultation à la séance uniquement hors première consultation de bilan diététique) : pour les étudiants, les demandeurs d’emploi et le parrainage, sous réserve de présenter le justificatif qui s’applique.
</li>Pour un prix de 40€ de la séance.
</ul>
<ul>   
   <li>Ateliers d'entreprises : Gestion du stress, Comment optimiser les repas pour une meilleure performance au travail...
   </li>Prix sur devis.
   </ul>
</div>
        </section>
        <section id="avis" className="avis-section">
        <h2>Ils m'ont fait confiance</h2>
<div className='aviscontainer'>

<ul>   
   <li> <i className="fa-solid fa-user"></i> Audrey H.
   </li><li>Audrey Brelle est une personne bienveillante et professionnelle.</li>
 <li>Son approche : accompagnement au quotidien et conseils personnalisés, la prise en compte du sommeil et du stress. </li>
<li>La perte de poids est amorcée grâce à Audrey que je remercie.</li>
   </ul>

   <ul>   
   <li> <i className="fa-solid fa-user"></i> Eloïse C.
   </li><li>Étant quelqu’un de très anxieuse et ayant un rapport très compliqué avec l’alimentation, j’avais besoin d’aide et Audrey pouvait m’aider sur ces 2 aspects ! </li>
 <li>Depuis le début du suivi, je me sens beaucoup mieux, plus d’énergie, moins d’anxiété grâce à ces petits exercices miracles !  </li>
<li>Il n’y a aucun jugement, on est là pour progresser et Audrey est quelqu’un de très gentille qui nous pousse à bien faire ! Je recommande à tous ceux qui ont besoin d’aide avec l’alimentation et qui sont stressés, c’est vraiment le bon endroit !</li>
   </ul>

   <ul>   
   <li> <i className="fa-solid fa-user"></i> Ana F.
   </li><li>Super Diététicienne ! À un sens humain que j'apprécie beaucoup, elle vous aide à trouver ce qu'il ne va pas dans nos habitudes et s'adapte à chacun !</li>
 <li>Elle propose diverses solutions, comme l’alimentation, la relaxation, des compléments alimentaires bios, français, et sains pour le corps. </li>
<li>Honnêtement, je n’ai rien à dire. Elle est chaleureuse, à l'écoute et bienveillante. Elle aime ce qu'elle fait et ça se voit !</li>
   </ul>

   <ul>   
   <li> <i className="fa-solid fa-user"></i> Manon L.
   </li><li>Audrey est une professionnelle à l’écoute et humaine. Elle connaît son métier et propose des suivis adaptés à nos besoins, sans jugement, et qui fonctionnent vraiment.</li>
 <li>Elle propose des alternatives à la diététique en alliant nutrition et bien-être, ce qui rend le suivi agréable et efficace.  </li>
<li>J’ai beaucoup appris sur ma manière de m’alimenter et sur mes habitudes à changer. Je la remercie et la recommande.</li>
   </ul>
</div>


        </section>
        <section id="contact" className="contact-section">
          <img src={contact} alt="pour me contacter" className="contactimg"></img>
          <div className="contacttext">
          <a className="rdv" href='https://docorga.com/praticien/66d5b4eb0b761ae4a2457479'><i className="fa-solid fa-arrow-right"></i>Prendre Rendez Vous</a>
          <p><i className="fa-solid fa-envelope"></i> Mail : audreybrelle.nutrition@gmail.com</p>
          <p><i className="fa-solid fa-phone"></i>Téléphone : 06 58 28 27 57</p>
          <a href='https://www.linkedin.com/in/audrey-brelle-pleine-sante'><i className="fa-brands fa-linkedin"></i></a>
          <a href='https://www.instagram.com/audreybrelle_nutrition'><i className="fa-brands fa-instagram"></i></a>
          </div>
        </section>
      </main>
      <footer>
        <a>© Copyright 2024 Audrey Brelle Nutrition Santé - Tous droits réservés </a>
        <a href="ML.pdf">Mentions légales</a>
        <a href="CGU.pdf">Condition Générale d'Utilisation</a>
      </footer>
    </div>
  );
}

export default App;
