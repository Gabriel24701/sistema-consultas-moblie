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

export const medicosIniciais: Medico[] = [
  {
    id: 1,
    nome: "Dr. Carlos Silva",
    crm: "12345-SP",
    especialidade: especialidadesIniciais[0], // Cardiologia
    ativo: true,
  },
  {
    id: 2,
    nome: "Dra. Ana Costa",
    crm: "23456-SP",
    especialidade: especialidadesIniciais[1], // Dermatologia
    ativo: true,
  },
  {
    id: 3,
    nome: "Dr. Pedro Santos",
    crm: "34567-SP",
    especialidade: especialidadesIniciais[2], // Ortopedia
    ativo: true,
  },
  {
    id: 4,
    nome: "Dra. Maria Oliveira",
    crm: "45678-SP",
    especialidade: especialidadesIniciais[3], // Pediatria
    ativo: true,
  },
  {
    id: 5,
    nome: "Dra. Juliana Mendes",
    crm: "56789-SP",
    especialidade: especialidadesIniciais[4], // Ginecologia
    ativo: true,
  },
  {
    id: 6,
    nome: "Dr. Roberto Lima",
    crm: "67890-SP",
    especialidade: especialidadesIniciais[5], // Oftalmologia
    ativo: true,
  },
  {
    id: 7,
    nome: "Dra. Fernanda Souza",
    crm: "78901-SP",
    especialidade: especialidadesIniciais[6], // Neurologia
    ativo: true,
  },
  {
    id: 8,
    nome: "Dr. Lucas Almeida",
    crm: "89012-SP",
    especialidade: especialidadesIniciais[7], // Psiquiatria
    ativo: true,
  },
  {
    id: 9,
    nome: "Dra. Patricia Rocha",
    crm: "90123-SP",
    especialidade: especialidadesIniciais[8], // Endocrinologia
    ativo: true,
  },
  {
    id: 10,
    nome: "Dr. João Ferreira",
    crm: "01234-SP",
    especialidade: especialidadesIniciais[9], // Clínica Geral
    ativo: true,
  },
];