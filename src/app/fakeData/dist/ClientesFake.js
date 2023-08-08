"use strict";
exports.__esModule = true;
var clientesFake = [
    {
        id: 1,
        nome: 'João Silva',
        contato: 'joao@example.com',
        observacoes: 'Prefere consultas à tarde.',
        pacoteSemanal: true,
        valorConsulta: 50,
        saldoDevedor: 0,
        inicial: '',
        telefone: 6799785554,
        endereco: {
            cep: '12345-678',
            logradouro: 'Rua A',
            numero: '123',
            bairro: 'Centro',
            cidade: 'Cidade',
            estado: 'UF'
        }
    },
    {
        id: 2,
        nome: 'Maria Santos',
        contato: 'maria@example.com',
        observacoes: 'Chega sempre pontualmente.',
        pacoteSemanal: false,
        valorConsulta: 60,
        saldoDevedor: 120,
        inicial: '',
        telefone: 67992488744,
        endereco: {
            cep: '54321-987',
            logradouro: 'Avenida B',
            numero: '456',
            bairro: 'Bairro Alto',
            cidade: 'Outra Cidade',
            estado: 'UF'
        }
    },
    {
        id: 3,
        nome: 'Carlos Ferreira',
        contato: 'carlos@example.com',
        observacoes: 'Prefere consultas pela manhã.',
        pacoteSemanal: true,
        valorConsulta: 45,
        saldoDevedor: 0,
        inicial: '',
        telefone: 67992488744,
        endereco: {
            cep: '98765-432',
            logradouro: 'Praça C',
            numero: '789',
            bairro: 'Centro',
            cidade: 'Cidade',
            estado: 'UF'
        }
    },
    {
        id: 4,
        nome: 'Ana Lima',
        contato: 'ana@example.com',
        observacoes: 'Tem alergia a certos medicamentos.',
        pacoteSemanal: false,
        valorConsulta: 70,
        saldoDevedor: 35,
        inicial: '',
        telefone: 67992488744,
        endereco: {
            cep: '56789-123',
            logradouro: 'Rua D',
            numero: '987',
            bairro: 'Bairro Novo',
            cidade: 'Outra Cidade',
            estado: 'UF'
        }
    },
    {
        id: 5,
        nome: 'Pedro Ribeiro',
        contato: 'pedro@example.com',
        observacoes: 'Necessita de estacionamento próximo.',
        pacoteSemanal: true,
        valorConsulta: 55,
        saldoDevedor: 0,
        inicial: '',
        telefone: 67992488744,
        endereco: {
            cep: '34567-890',
            logradouro: 'Alameda E',
            numero: '654',
            bairro: 'Centro',
            cidade: 'Cidade',
            estado: 'UF'
        }
    },
    {
        id: 6,
        nome: 'Mariana Fernandes',
        contato: 'mariana@example.com',
        observacoes: 'Alergia a frutos do mar.',
        pacoteSemanal: false,
        valorConsulta: 65,
        saldoDevedor: 130,
        inicial: '',
        telefone: 67992488744,
        endereco: {
            cep: '78901-234',
            logradouro: 'Avenida F',
            numero: '321',
            bairro: 'Bairro Novo',
            cidade: 'Outra Cidade',
            estado: 'UF'
        }
    },
    {
        id: 7,
        nome: 'Ricardo Oliveira',
        contato: 'ricardo@example.com',
        observacoes: 'Tratamento regular.',
        pacoteSemanal: true,
        valorConsulta: 60,
        saldoDevedor: 0,
        inicial: '',
        telefone: 67992488744,
        endereco: {
            cep: '65432-109',
            logradouro: 'Praça G',
            numero: '765',
            bairro: 'Centro',
            cidade: 'Cidade',
            estado: 'UF'
        }
    },
    {
        id: 8,
        nome: 'Sofia Almeida',
        contato: 'sofia@example.com',
        observacoes: 'Possui restrições alimentares.',
        pacoteSemanal: false,
        valorConsulta: 75,
        saldoDevedor: 150,
        inicial: '',
        telefone: 67992488744,
        endereco: {
            cep: '12345-678',
            logradouro: 'Rua H',
            numero: '543',
            bairro: 'Bairro Alto',
            cidade: 'Outra Cidade',
            estado: 'UF'
        }
    },
    {
        id: 9,
        nome: 'Fernando Cunha',
        contato: 'fernando@example.com',
        observacoes: 'Acompanhado por um familiar.',
        pacoteSemanal: true,
        valorConsulta: 55,
        saldoDevedor: 0,
        inicial: '',
        telefone: 67992488744,
        endereco: {
            cep: '98765-432',
            logradouro: 'Alameda I',
            numero: '876',
            bairro: 'Centro',
            cidade: 'Cidade',
            estado: 'UF'
        }
    },
    {
        id: 10,
        nome: 'Isabela Martins',
        contato: 'isabela@example.com',
        observacoes: 'Prefere consultas pela tarde.',
        pacoteSemanal: false,
        valorConsulta: 70,
        saldoDevedor: 140,
        inicial: '',
        telefone: 67992488744,
        endereco: {
            cep: '56789-012',
            logradouro: 'Avenida J',
            numero: '234',
            bairro: 'Bairro Novo',
            cidade: 'Outra Cidade',
            estado: 'UF'
        }
    },
    {
        id: 11,
        nome: 'Gabriel Pereira',
        contato: 'gabriel@example.com',
        observacoes: 'Necessita de atendimento especial.',
        pacoteSemanal: true,
        valorConsulta: 65,
        saldoDevedor: 0,
        inicial: '',
        telefone: 67992488744,
        endereco: {
            cep: '34567-890',
            logradouro: 'Praça K',
            numero: '987',
            bairro: 'Centro',
            cidade: 'Cidade',
            estado: 'UF'
        }
    },
    {
        id: 12,
        nome: 'Laura Rocha',
        contato: 'laura@example.com',
        observacoes: 'Chega sempre com um acompanhante.',
        pacoteSemanal: false,
        valorConsulta: 80,
        saldoDevedor: 160,
        inicial: '',
        telefone: 67992488744,
        endereco: {
            cep: '78901-234',
            logradouro: 'Rua L',
            numero: '876',
            bairro: 'Bairro Alto',
            cidade: 'Outra Cidade',
            estado: 'UF'
        }
    },
    {
        id: 13,
        nome: 'Rafael Sousa',
        contato: 'rafael@example.com',
        observacoes: 'Tratamento de longa duração.',
        pacoteSemanal: true,
        valorConsulta: 70,
        saldoDevedor: 0,
        inicial: '',
        telefone: 67992488744,
        endereco: {
            cep: '65432-109',
            logradouro: 'Alameda M',
            numero: '765',
            bairro: 'Centro',
            cidade: 'Cidade',
            estado: 'UF'
        }
    },
    {
        id: 14,
        nome: 'Sophia Carvalho',
        contato: 'sophia@example.com',
        observacoes: 'Necessita de atendimento rápido.',
        pacoteSemanal: false,
        valorConsulta: 85,
        saldoDevedor: 170,
        inicial: '',
        telefone: 67992488744,
        endereco: {
            cep: '12345-678',
            logradouro: 'Avenida N',
            numero: '234',
            bairro: 'Bairro Novo',
            cidade: 'Outra Cidade',
            estado: 'UF'
        }
    },
    {
        id: 15,
        nome: 'Enzo Machado',
        contato: 'enzo@example.com',
        observacoes: 'Vem de transporte público.',
        pacoteSemanal: true,
        valorConsulta: 75,
        saldoDevedor: 0,
        inicial: '',
        telefone: 67992488744,
        endereco: {
            cep: '98765-432',
            logradouro: 'Praça O',
            numero: '543',
            bairro: 'Centro',
            cidade: 'Cidade',
            estado: 'UF'
        }
    },
    {
        id: 16,
        nome: 'Valentina Gomes',
        contato: 'valentina@example.com',
        observacoes: 'Prefere consulta às segundas-feiras.',
        pacoteSemanal: false,
        valorConsulta: 90,
        saldoDevedor: 180,
        inicial: '',
        telefone: 67992488744,
        endereco: {
            cep: '56789-012',
            logradouro: 'Rua P',
            numero: '876',
            bairro: 'Bairro Alto',
            cidade: 'Outra Cidade',
            estado: 'UF'
        }
    },
    {
        id: 17,
        nome: 'Lucas Barros',
        contato: 'lucas@example.com',
        observacoes: 'Paciente crônico.',
        pacoteSemanal: true,
        valorConsulta: 80,
        saldoDevedor: 0,
        inicial: '',
        telefone: 67992488744,
        endereco: {
            cep: '34567-890',
            logradouro: 'Alameda Q',
            numero: '987',
            bairro: 'Centro',
            cidade: 'Cidade',
            estado: 'UF'
        }
    },
    {
        id: 18,
        nome: 'Lívia Costa',
        contato: 'livia@example.com',
        observacoes: 'Alergia a certos medicamentos.',
        pacoteSemanal: false,
        valorConsulta: 95,
        saldoDevedor: 190,
        inicial: '',
        telefone: 67992488744,
        endereco: {
            cep: '78901-234',
            logradouro: 'Avenida R',
            numero: '234',
            bairro: 'Bairro Novo',
            cidade: 'Outra Cidade',
            estado: 'UF'
        }
    },
    {
        id: 19,
        nome: 'Matheus Andrade',
        contato: 'matheus@example.com',
        observacoes: 'Chega sempre com um familiar.',
        pacoteSemanal: true,
        valorConsulta: 85,
        saldoDevedor: 0,
        inicial: '',
        telefone: 67992488744,
        endereco: {
            cep: '65432-109',
            logradouro: 'Praça S',
            numero: '765',
            bairro: 'Centro',
            cidade: 'Cidade',
            estado: 'UF'
        }
    },
    {
        id: 20,
        nome: 'Isabel Nunes',
        contato: 'isabel@example.com',
        observacoes: 'Precisa de consulta emergencial.',
        pacoteSemanal: false,
        valorConsulta: 100,
        saldoDevedor: 200,
        inicial: '',
        telefone: 67992488744,
        endereco: {
            cep: '12345-678',
            logradouro: 'Rua T',
            numero: '234',
            bairro: 'Bairro Alto',
            cidade: 'Outra Cidade',
            estado: 'UF'
        }
    },
    {
        id: 21,
        nome: 'Guilherme Ramos',
        contato: 'guilherme@example.com',
        observacoes: 'Possui alergia a pólen.',
        pacoteSemanal: true,
        valorConsulta: 90,
        saldoDevedor: 0,
        inicial: '',
        telefone: 67992488744,
        endereco: {
            cep: '98765-432',
            logradouro: 'Alameda U',
            numero: '543',
            bairro: 'Centro',
            cidade: 'Cidade',
            estado: 'UF'
        }
    },
    {
        id: 22,
        nome: 'Júlia Cardoso',
        contato: 'julia@example.com',
        observacoes: 'Vem de carro particular.',
        pacoteSemanal: false,
        valorConsulta: 105,
        saldoDevedor: 210,
        inicial: '',
        telefone: 67992488744,
        endereco: {
            cep: '56789-012',
            logradouro: 'Avenida V',
            numero: '876',
            bairro: 'Bairro Novo',
            cidade: 'Outra Cidade',
            estado: 'UF'
        }
    },
    {
        id: 23,
        nome: 'Arthur Oliveira',
        contato: 'arthur@example.com',
        observacoes: 'Consulta de acompanhamento.',
        pacoteSemanal: true,
        valorConsulta: 95,
        saldoDevedor: 0,
        inicial: '',
        telefone: 67992488744,
        endereco: {
            cep: '34567-890',
            logradouro: 'Praça W',
            numero: '987',
            bairro: 'Centro',
            cidade: 'Cidade',
            estado: 'UF'
        }
    },
    {
        id: 24,
        nome: 'Lara Mendes',
        contato: 'lara@example.com',
        observacoes: 'Prefere consulta às quartas-feiras.',
        pacoteSemanal: false,
        valorConsulta: 110,
        saldoDevedor: 220,
        inicial: '',
        telefone: 67992488744,
        endereco: {
            cep: '78901-234',
            logradouro: 'Rua X',
            numero: '234',
            bairro: 'Bairro Alto',
            cidade: 'Outra Cidade',
            estado: 'UF'
        }
    },
    {
        id: 25,
        nome: 'Davi Ferreira',
        contato: 'davi@example.com',
        observacoes: 'Necessita de atendimento especializado.',
        pacoteSemanal: true,
        valorConsulta: 100,
        saldoDevedor: 0,
        inicial: '',
        telefone: 67992488744,
        endereco: {
            cep: '65432-109',
            logradouro: 'Alameda Y',
            numero: '765',
            bairro: 'Centro',
            cidade: 'Cidade',
            estado: 'UF'
        }
    },
    {
        id: 26,
        nome: 'Bianca Sousa',
        contato: 'bianca@example.com',
        observacoes: 'Consulta de acompanhamento.',
        pacoteSemanal: false,
        valorConsulta: 115,
        saldoDevedor: 230,
        inicial: '',
        telefone: 67992488744,
        endereco: {
            cep: '12345-678',
            logradouro: 'Avenida Z',
            numero: '234',
            bairro: 'Bairro Novo',
            cidade: 'Outra Cidade',
            estado: 'UF'
        }
    },
    {
        id: 27,
        nome: 'Enzo Gabriel Lima',
        contato: 'enzogabriel@example.com',
        observacoes: 'Precisa de atendimento rápido.',
        pacoteSemanal: true,
        valorConsulta: 105,
        saldoDevedor: 0,
        inicial: '',
        telefone: 67992488744,
        endereco: {
            cep: '98765-432',
            logradouro: 'Praça 1',
            numero: '543',
            bairro: 'Centro',
            cidade: 'Cidade',
            estado: 'UF'
        }
    },
    {
        id: 28,
        nome: 'Helena Gomes',
        contato: 'helena@example.com',
        observacoes: 'Acompanhada por um familiar.',
        pacoteSemanal: false,
        valorConsulta: 120,
        saldoDevedor: 240,
        inicial: '',
        telefone: 67992488744,
        endereco: {
            cep: '56789-012',
            logradouro: 'Avenida 2',
            numero: '876',
            bairro: 'Bairro Alto',
            cidade: 'Outra Cidade',
            estado: 'UF'
        }
    },
    {
        id: 29,
        nome: 'Gabriel Ribeiro',
        contato: 'gabrielr@example.com',
        observacoes: 'Prefere consulta às sextas-feiras.',
        pacoteSemanal: true,
        valorConsulta: 110,
        saldoDevedor: 0,
        inicial: '',
        telefone: 67992488744,
        endereco: {
            cep: '34567-890',
            logradouro: 'Alameda 3',
            numero: '987',
            bairro: 'Centro',
            cidade: 'Cidade',
            estado: 'UF'
        }
    },
    {
        id: 30,
        nome: 'Lorena Machado',
        contato: 'lorena@example.com',
        observacoes: 'Consulta de rotina.',
        pacoteSemanal: false,
        valorConsulta: 125,
        saldoDevedor: 250,
        inicial: '',
        telefone: 67992488744,
        endereco: {
            cep: '78901-234',
            logradouro: 'Rua 4',
            numero: '234',
            bairro: 'Bairro Novo',
            cidade: 'Outra Cidade',
            estado: 'UF'
        }
    },
];
exports["default"] = clientesFake;
