export type ColumnConfig = {
    field: string
    label: string
    renderCell?: (item: Record<string, string>) => string | React.ReactNode
    renderHeader?: () => string | React.ReactNode
}

type Employee = {
	id: string
	fullName: string
	gender: string
	email: string
	job: string
}
export const employeeKey : (employee: Employee) => string = employee => employee.id
export const employeesConfig: ColumnConfig[] = [
	{
		field:'id',
		label:'Id',
		renderCell: (employee) => employee.id.slice(employee.id.lastIndexOf('-')+1)
	},
	{
		field:'fullName',
		label:'Full Name'
	},
	{
		field: 'gender',
		label: 'Gender',
	},
	{
		field: 'email',
		label: 'Email Address',
	},
	{
		field: 'job',
		label: 'Job Title',
	}
]
export const employees: Employee[] = [
	{
		id: '70ebe05d-28ce-4f39-bfd5-73b16d0b58ce',
		fullName: 'Egan Minchinton',
		gender: 'Male',
		email: 'eminchinton0@hatena.ne.jp',
		job: 'Occupational Therapist',
	},
	{
		id: '4e379f28-abda-4fbd-8911-c7604cf28bb7',
		fullName: "Adan O'Carney",
		gender: 'Male',
		email: 'aocarney1@cnet.com',
		job: 'Account Representative II',
	},
	{
		id: '6e7c8b21-dee3-46ae-bb55-24cc956bffc3',
		fullName: 'Devi Ryson',
		gender: 'Female',
		email: 'dryson2@usa.gov',
		job: 'Administrative Assistant I',
	},
	{
		id: 'f46298fa-cfff-4f8f-9aa9-f609868c89d8',
		fullName: 'Nellie Oliveira',
		gender: 'Female',
		email: 'noliveira3@so-net.ne.jp',
		job: 'Chief Design Engineer',
	},
	{
		id: '36ace07f-6017-4514-9d48-28f9fb8b7614',
		fullName: 'Ashely Linnett',
		gender: 'Female',
		email: 'alinnett4@hp.com',
		job: 'Technical Writer',
	},
	{
		id: 'ca0a9d79-0def-4861-b9ff-ee6f8a505d5e',
		fullName: 'Ky Yerlett',
		gender: 'Female',
		email: 'kyerlett5@surveymonkey.com',
		job: 'Analyst Programmer',
	},
	{
		id: '6d779852-ca3f-4a6c-a251-f80ada02643c',
		fullName: 'Fifine Yabsley',
		gender: 'Female',
		email: 'fyabsley6@google.de',
		job: 'Sales Representative',
	},
	{
		id: '336357e7-637b-4c7d-90f5-45663c0a8ebf',
		fullName: 'Garey Richford',
		gender: 'Male',
		email: 'grichford7@vkontakte.ru',
		job: 'Structural Analysis Engineer',
	},
	{
		id: '183c152d-4659-4dc6-87a7-4a32464cfde1',
		fullName: 'Gannie Jarmain',
		gender: 'Bi"gender"',
		email: 'gjarmain8@nymag.com',
		job: 'Legal Assistant',
	},
	{
		id: '0e1c5dea-b443-408e-94b5-1a512b6b71b7',
		fullName: 'Elka Sitwell',
		gender: 'Female',
		email: 'esitwell9@census.gov',
		job: 'Professor',
	},
	{
		id: 'cde1ada0-64db-492d-b665-d211ef284e77',
		fullName: 'Nevins McCague',
		gender: '"gender"flu"id"',
		email: 'nmccaguea@fotki.com',
		job: 'Developer I',
	},
	{
		id: '0e550760-f25a-496c-b02a-443ad3658f35',
		fullName: 'Jeane Simonel',
		gender: 'Female',
		email: 'jsimonelb@wikipedia.org',
		job: 'Operator',
	},
	{
		id: '286844c0-f13c-4850-8aaf-79529c753094',
		fullName: 'Romain Robottom',
		gender: 'Male',
		email: 'rrobottomc@1und1.de',
		job: 'Chemical Engineer',
	},
	{
		id: '536b7ac6-0524-4ab6-b92c-304fb46d19ca',
		fullName: 'Elsinore Diack',
		gender: 'Female',
		email: 'ediackd@adobe.com',
		job: 'Geologist III',
	},
	{
		id: '979f2eab-587e-439a-a00e-50e71741d4f2',
		fullName: 'Mar Torra',
		gender: 'Male',
		email: 'mtorrae@hc360.com',
		job: 'Senior Editor',
	},
	{
		id: '450fc30f-9941-48fa-9e94-f524af4228c9',
		fullName: 'Thorn Sheber',
		gender: 'Male',
		email: 'tsheberf@topsy.com',
		job: 'Community Outreach Specialist',
	},
	{
		id: '166f0f94-f9af-4b58-9ad8-9959d8dde78d',
		fullName: 'Taffy Mander',
		gender: 'Female',
		email: 'tmanderg@example.com',
		job: 'Sales Representative',
	},
	{
		id: 'd5709f67-4c15-4743-86e4-0b0dddc07d74',
		fullName: 'Kermy Dunlea',
		gender: 'Male',
		email: 'kdunleah@un.org',
		job: 'Quality Control Specialist',
	},
	{
		id: 'f9925419-a0a6-48ca-a971-604f4532e05e',
		fullName: 'Arthur Collington',
		gender: 'Male',
		email: 'acollingtoni@mit.edu',
		job: 'Senior Developer',
	},
	{
		id: '28d05b22-9e76-4e3b-96aa-08aafd05bf5f',
		fullName: 'Marigold Leggatt',
		gender: 'Female',
		email: 'mleggattj@businessins"id"er.com',
		job: 'Marketing Manager',
	},
]

type Car = {
	id: string
	make: string
	model: string
	year: string
	color: string
}
export const carKey : (car: Car) => string = car => car.id
export const carsConfig : ColumnConfig[] = [
	{
		field: 'id',
		label: 'Id',
		renderCell: (car) => car.id.slice(car.id.lastIndexOf('-')+1)
	},
	{
		field: 'make',
		label:'Make ',
	},
	{
		field: 'model',
		label:'Model ',
	},
	{
		field: 'year',
		label:'Year ',
	},
	{
		field: 'color',
		label:'Color ',
		renderCell: car => <div className={`m-2 p-3 bg-${car.color.toLocaleLowerCase()}-500`}></div>
	}
]
export const cars: Car[] = [
	{
		id: '0ac15f64-5d5d-43c3-8da9-8e5ad41f5e3c',
		make: 'Chevrolet',
		model: 'G-Series 2500',
		year: '1997',
		color: 'Green',
	},
	{
		id: '739ff45b-1ef2-4886-b765-4baaa86c4b24',
		make: 'Mitsubishi',
		model: 'Montero',
		year: '1995',
		color: 'Red',
	},
	{
		id: 'c14012dd-ba64-49a1-adfd-da104af0493e',
		make: 'Mazda',
		model: 'B2600',
		year: '1989',
		color: 'Blue',
	},
	{
		id: '54d033d9-f121-4d00-bf99-80aa5dbbe6c8',
		make: 'Ford',
		model: 'Thunderbird',
		year: '1984',
		color: 'Yellow',
	},
	{
		id: '5f282d97-1848-4901-9265-76a598204aae',
		make: 'Mercedes-Benz',
		model: 'CLS-Class',
		year: '2006',
		color: 'Blue',
	},
	{
		id: 'c84b3663-70dd-4d45-8c47-d0412f4201d0',
		make: 'Chevrolet',
		model: 'Tahoe',
		year: '2012',
		color: 'Green',
	},
	{
		id: '96469387-3c5e-4432-96f7-bcabaca3af10',
		make: 'Chevrolet',
		model: '1500',
		year: '1995',
		color: 'Blue',
	},
	{
		id: 'e950f299-f783-4add-a9d4-6086c72f829b',
		make: 'Infiniti',
		model: 'Q',
		year: '1998',
		color: 'Green',
	},
	{
		id: '049b3b24-93c6-442b-94f3-712968e281f0',
		make: 'Ford',
		model: 'F150',
		year: '1992',
		color: 'Yellow',
	},
	{
		id: 'a989c3aa-2c12-4aeb-9a90-fd2d170b8174',
		make: 'Chevrolet',
		model: 'Express 2500',
		year: '2005',
		color: 'Red',
	},
	{
		id: '3153688e-4c1a-4346-b9e6-1082137db861',
		make: 'Lincoln',
		model: 'Continental',
		year: '1999',
		color: 'Blue',
	},
	{
		id: '93ff32b9-123b-45c7-8ae8-fdf5ebe513ab',
		make: 'Mazda',
		model: 'MX-5',
		year: '1995',
		color: 'Red',
	},
	{
		id: '24d17697-d3ab-4a84-8071-069f095a2b6c',
		make: 'Mercedes-Benz',
		model: 'CLK-Class',
		year: '2001',
		color: 'Yellow',
	},
	{
		id: '1fa5ec68-91a5-4211-9c32-133b71b5f0e1',
		make: 'Infiniti',
		model: 'M',
		year: '2011',
		color: 'Green',
	},
	{
		id: '90776c83-c2e9-494c-bd5b-93127a4d6fcb',
		make: 'Volkswagen',
		model: 'Eurovan',
		year: '1999',
		color: 'Red',
	},
	{
		id: '9104a627-8664-4ccd-829c-0ecc64abcb0c',
		make: 'GMC',
		model: 'Jimmy',
		year: '1993',
		color: 'Blue',
	},
	{
		id: '64bcbe6f-cd38-4296-a8e9-f725c09bbeed',
		make: 'Audi',
		model: 'R8',
		year: '2010',
		color: 'Yellow',
	},
	{
		id: '0b94db9e-d23c-4d60-b907-618962ca125d',
		make: 'Mazda',
		model: 'Protege',
		year: '1998',
		color: 'Green',
	},
	{
		id: '722e4c6b-98ad-4070-8186-099805fa5dea',
		make: 'Hyundai',
		model: 'Tucson',
		year: '2010',
		color: 'Blue',
	},
	{
		id: 'f2d5b668-a8eb-494b-be66-6b900468d012',
		make: 'Hyundai',
		model: 'Genesis',
		year: '2009',
		color: 'Red',
	},
]
