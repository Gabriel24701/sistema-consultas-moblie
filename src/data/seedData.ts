import { Especialidade } from "../types/especialidade";
import { Medico } from "../interfaces/medico";
import { Paciente } from "../types/paciente";

export const  especialidadesIniciais: Especialidade[] = [
{id: 1, nome: "Cardiologia", descricao: "Cuidados com o coração"},
    {id: 2, nome: "Dermatologia", descricao: "Cuidados com a pele"},
    {id: 3, nome: "Ortopedia", descricao: "Cuidado com ossos e articulações"},
    {id: 4, nome: "Pediatria", descricao: "Cuidados com crianças" },
    {id: 5, nome: "Ginecologia", descricao: "Saúde da mulher" },
    {id: 6, nome: "Oftalmologia", descricao: "Cuidados com os olhos" },
    {id: 7, nome: "Neurologia", descricao: "Cuidados com o sistema nervoso" },
    {id: 8, nome: "Psiquiatria", descricao: "Saúde mental" },
    {id: 9, nome: "Endocrinologia", descricao: "Cuidados hormonais" },
    {id: 10, nome: "Clínica Geral", descricao: "Atendimento geral" },
];
