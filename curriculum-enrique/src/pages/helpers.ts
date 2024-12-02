export interface Project {
    imagen: string;
    nombre: string;
    descripcion: string;
    url: string;
    enlace: string;
}

export function prepareCardProject(props: Project, test = false) {
    return { ...props, test };
}
