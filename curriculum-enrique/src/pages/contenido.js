
export const testMode = true;

export const nombre = "Enrique Díaz Pérez"
export const quesoy = "Microinformático"
export const descripcion = "I have the capacity to work with Windows" 
export const descripcion2 = "and Linux systems (Including Windows and Linux Server)"
export const descripcion3 = "and handle several programming languajes."

// Informacion de los estudios
export const estudios = [
    {
        año: "2023 - 2025",
        titulo: "Desarrollo de Aplicaciones Web",
        datos: "Programacion en Java, JavaScript, Astro, HTML, CSS, SQL",
        instituto: "Santa Joaquina de Vedruna",
    },
    {	
        año: "2021 - 2023",
        titulo: "Microinformatica y Telecomunicaciones",
        datos: "Montaje y Mantenimiento de equipos, desarrollo de redes locales, HTML y CSS, Formacion y Orientacion Laboral y Empresa e Iniciativa Emprendedora",
        instituto: "Nuestra Señora de los Reyes (SAFA)",
    }
]

export const skills = [
    { skill: "HTML", nivel: "Level: Intemedio", imagen: "/public/html.png" }, 
    { skill: "CSS", nivel: "Level: Intermedio", imagen: "/public/css.png" },
    { skill: "JavaScript", nivel: "Level: Intermedio", imagen: "/public/js.png" },
    { skill: "Java", nivel: "Level: Avanzado", imagen: "/public/java.png" },
    { skill: "Astro", nivel: "Level: Intermedio", imagen: "/public/astro.png" },
    { skill: "SQL", nivel: "Level: Avanzado", imagen: "/public/mysql.png" },
    { skill: "Linux", nivel: "Level: Intermedio", imagen: "/public/linux.png" },
    { skill: "Windows", nivel: "Level: Avanzado", imagen: "/public/windows.png" },
]

export const trabajos = [
    {
        tiempo: "Mar 2024 - Jun 2025",
        nombre: "SOLTEL",
        descripcion: "Database administration, equipment assembly and mantenance. Remote assistance. Programming and designing of webpages and API´s.",
        imagen: "/public/soltel.jfif",
    },
    {
        tiempo: "Apr 2024 - Jun 2024",
        nombre: "LANZADERA MUSIC",
        descripcion: "Database administration and website managment, i carry about the music release managment, correcting errors in the release code. This job was online",
        imagen: "/public/lm.jfif",
    },
    {
        tiempo: "Jan 2024 - Apr 2024",
        nombre: "UPI",
        descripcion: "Assembly and mantenace of electronics devices, druing this job i moved arround Seville carryng out assignments for the University of Seville (in all districts)",
        imagen: "/public/upi.png",
    },
    {
        tiempo: "Mar 2023 - Jun 2023",
        nombre: "CATSA, NITA",
        descripcion: "Equipment assembly and mantenace of electronics devices, development of databases in Microsoft Access and Excel documents",
        imagen: "/public/catsa.jpeg",
    },
    {
        tiempo: "Jul 2024",
        nombre: "KIKO Supermarket",
        descripcion: "I whatch for a simple work on summer, duing this job i work as a beakery and inventory managment",
        imagen: "/public/kiko.png",
    }
]

export const proyectos = [
    
    {
        imagen: "",
        nombre: "",
        descripcion: "",
        enlace: "",
    }
]

// Tengo que crear un fetch el cual haga un fetch al metodo que devuelve todos los proyectos en la base de datos
export const fetchProyectos = async () => {
    const response = await fetch("http://localhost:8080/projects");
    const data = await response.json();


    //Para almacenar los datos, tengo que poner el nombre de la variable que me da el fetch
    return data.map(repo => ({
        id: repo.project_id,
        imagen: repo.foto,
        nombre: repo.nombre,
        descripcion: repo.descripcion,
        enlace: repo.urlRepositorio,
        url: "#",
    }));
};
  //Y el async es para que toda la consulta cargue de manera asincrona y no tenga que esperar a quela pagina cargue para hacer la consulta
(async () => {
    const proyectos = await fetchProyectos();
    //Cuando cargue, guardará la informacion dentro de proyectos, convirtiendolo en un json legible y asignando 2 espacios para que sea facil de leer
    fs.writeFileSync('projects', JSON.stringify(proyectos, null, 2));
    //Si se completa, mostrará un mensaje por la terminal
    console.log("Datos guardados");
})();

export const referencias = [
    {
        foto: "/public/joaKing.png",
        name: "Joaquin Borrego",
        descripcion: "Has so much aura",
        oficio: "Teacher of Web Aplications Development",
        url: "Linkedin",
        linkedin: "https://es.linkedin.com/in/juakylc",
    }
]
import { fetchProyectosByWord } from "@/pages/contenido";

    // Escuchar el clic en el botón
    
    // document.getElementById('search-button').onclick = () => {
    //     const input = document.getElementById('search-input');
    //     const query = input.value.trim();

    //     if (query.length >= 3) {
    //         console.log(`Buscando proyectos con: ${query}`);
    //         fetchProyectosByWord(query);
    //     } else {
    //         alert('Por favor, escribe al menos 3 letras.');
    //     }
    // };
    
export const fetchProyectosByWord = async (word) => {
    const response = await fetch(`http://localhost:8080/projects/${word}`);
    const data = await response.json();
  
    //Para almacenar los datos, tengo que poner el nombre de la variable que me da el fetch
    return data.map(repo => ({
        id: repo.project_id,
      imagen: repo.foto,
      nombre: repo.nombre,
      descripcion: repo.descripcion,
      enlace: repo.urlRepositorio,
        url: "#",
    }));
  };
  //Y el async es para que toda la consulta cargue de manera asincrona y no tenga que esperar a quela pagina cargue para hacer la consulta
  (async () => {
    const proyectos = await fetchProyectos();
    //Cuando cargue, guardará la informacion dentro de proyectos, convirtiendolo en un json legible y asignando 2 espacios para que sea facil de leer
    fs.writeFileSync('projects', JSON.stringify(proyectos, null, 2));
    //Si se completa, mostrará un mensaje por la terminal
    console.log("Datos guardados");
  })();
