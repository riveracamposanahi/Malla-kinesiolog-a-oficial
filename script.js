// --- 1. DATOS DE LA MALLA CURRICULAR ---

const mallaData = {
    // Definición de prerrequisitos: 'ID_RAMO': ['ID_PREREQUISITO_1', 'ID_PREREQUISITO_2', ...]
    // HE CREADO UNA ESTRUCTURA SIMPLE DE PRERREQUISITOS PARA DEMOSTRACIÓN.
    // DEBES EXTENDER ESTA LISTA CON LAS REGLAS REALES DE TU MALLA.
    prerequisitos: {
        'CUIDADOS_BASICOS': ['INTRO_KINE_1'],
        'BIOESTADISTICA': ['MATEMATICAS'],
        'HISTOEMBRIOLOGIA': ['BIOLOGIA_CELULAR'],
        'BIOQUIMICA': ['QUIMICA'],
        'ANATOMIA_FUNCIONAL': ['ANATOMIA_GENERAL', 'INTRO_KINE_2'],
        'FISIOLOGIA': ['BIOQUIMICA', 'HISTOEMBRIOLOGIA'],
        'BASES_BIOMECANICAS': ['ANATOMIA_FUNCIONAL', 'BIOFISICA'],
        'CONTROL_MOTOR': ['FISIOLOGIA'],
        'FISIOPATOLOGIA': ['FISIOLOGIA', 'MEDICINA_INTERNA'], // Esto es un ejemplo, Medicina Interna está en S5, lo hará inalcanzable al inicio
        // Agrega el resto de prerrequisitos aquí
    },

    semestres: [
        // Semestre 1
        {
            nombre: "Semestre 1",
            ramos: [
                { id: 'INTRO_KINE_1', nombre: "Introducción a la Kinesiología" },
                { id: 'MATEMATICAS', nombre: "Matemáticas" },
                { id: 'BIOLOGIA_CELULAR', nombre: "Biología Celular y Genética" },
                { id: 'QUIMICA', nombre: "Química" },
                { id: 'ANATOMIA_GENERAL', nombre: "Anatomía General" },
                { id: 'PSICOLOGIA_GENERAL', nombre: "Psicología General" },
                { id: 'COMPETENCIAS_ACAD', nombre: "Competencias Académicas Universitarias" },
            ]
        },
        // Semestre 2
        {
            nombre: "Semestre 2",
            ramos: [
                { id: 'INTRO_KINE_2', nombre: "Introducción a la Kinesiología" },
                { id: 'CUIDADOS_BASICOS', nombre: "Cuidados Básicos del Enfermo" },
                { id: 'BIOESTADISTICA', nombre: "Bioestadística" },
                { id: 'HISTOEMBRIOLOGIA', nombre: "Histoembriología" },
                { id: 'BIOQUIMICA', nombre: "Bioquímica" },
                { id: 'PSICOLOGIA_EVOLUTIVA', nombre: "Psicología Evolutiva y Social" },
                { id: 'ESCRITURA_LECTURA', nombre: "Escritura y Lectura Académica" },
            ]
        },
        // Semestre 3
        {
            nombre: "Semestre 3",
            ramos: [
                { id: 'ANATOMIA_FUNCIONAL', nombre: "Anatomía Funcional" },
                { id: 'FISIOLOGIA', nombre: "Fisiología" },
                { id: 'EDUCACION_SALUD', nombre: "Educación en Salud" },
                { id: 'SOCIOANTROPOLOGIA', nombre: "Socioantropología" },
                { id: 'EXPRESION_CORPORAL', nombre: "Expresión Corporal" },
                { id: 'BIOFISICA', nombre: "Biofísica para Kinesiología" },
                { id: 'GESTION_LIDERAZGO', nombre: "Gestión y Liderazgo" },
                { id: 'SALUD_PUBLICA_1', nombre: "Salud Pública I" },
            ]
        },
        // Semestre 4
        {
            nombre: "Semestre 4",
            ramos: [
                { id: 'BASES_BIOMECANICAS', nombre: "Bases Biomecánicas del Movimiento" },
                { id: 'CONTROL_MOTOR', nombre: "Control Motor" },
                { id: 'FISIOPATOLOGIA', nombre: "Fisiopatología" },
                { id: 'NEUROFISIOLOGIA', nombre: "Neurofisiología" },
                { id: 'PSICOLOGIA_APLICADA', nombre: "Psicología Aplicada" },
                { id: 'GESTION_RRHH', nombre: "Gestión de Recursos Humanos" },
                { id: 'SALUD_PUBLICA_2', nombre: "Salud Pública II" },
                { id: 'COMUNICACION_EFICAZ', nombre: "Comunicación Eficaz" },
            ]
        },
        // Semestre 5
        {
            nombre: "Semestre 5",
            ramos: [
                { id: 'SENSORIO_MOTRIZ_1', nombre: "Sensorio Motriz (I)" },
                { id: 'RAZONAMIENTO_CLINICO', nombre: "Razonamiento Clínico" },
                { id: 'ANALISIS_MOVIMIENTO', nombre: "Análisis del Movimiento" },
                { id: 'MEDICINA_INTERNA', nombre: "Medicina Interna" },
                { id: 'FISIO_EJERCICIO_1', nombre: "Fisiología del Ejercicio" },
                { id: 'EVAL_GESTION_PROYECTOS', nombre: "Evaluación y Gestión de Proyectos" },
                { id: 'ELECTIVO_1', nombre: "Electivo" },
            ]
        },
        // Semestre 6
        {
            nombre: "Semestre 6",
            ramos: [
                { id: 'SENSORIO_MOTRIZ_2', nombre: "Sensorio Motriz (II)" },
                { id: 'PEDIATRIA', nombre: "Pediatría" },
                { id: 'MUSCULO_ESQ_COLUMNA', nombre: "Músculo Esquelético Columna Vertebral" },
                { id: 'ERGONOMIA', nombre: "Ergonomía y Salud Ocupacional" },
                { id: 'FISIO_EJERCICIO_CLINICO', nombre: "Fisiología Clínica del Ejercicio" },
                { id: 'EJERCICIO_TERAPEUTICO', nombre: "Ejercicio Terapéutico" },
                { id: 'BIOETICA', nombre: "Bioética" },
            ]
        },
        // Semestre 7
        {
            nombre: "Semestre 7",
            ramos: [
                { id: 'GERONTOLOGIA_1', nombre: "Gerontología (I)" },
                { id: 'FISIOTERAPIA_1', nombre: "Fisioterapia (I)" },
                { id: 'MUSCULO_ESQ_EXTREM', nombre: "Músculo Esquelético Extremidades" },
                { id: 'CARDIO_RESPIRATORIO_1', nombre: "Cardio-Respiratorio (I)" },
                { id: 'KINESITERAPIA_ESPECIALIDADES', nombre: "Kinesiterapia en Especialidades" },
                { id: 'METODOLOGIA_INVEST_1', nombre: "Metodología de la Investigación en Salud (I)" },
                { id: 'ADMINISTRACION_SALUD', nombre: "Administración en Salud" },
            ]
        },
        // Semestre 8
        {
            nombre: "Semestre 8",
            ramos: [
                { id: 'GERONTOLOGIA_2', nombre: "Gerontología (II)" },
                { id: 'FISIOTERAPIA_2', nombre: "Fisioterapia (II)" },
                { id: 'MUSCULO_ESQ_EXTREM_2', nombre: "Músculo Esquelético Extremidades (II)" },
                { id: 'CARDIO_RESPIRATORIO_2', nombre: "Cardio-Respiratorio (II)" },
                { id: 'METODOLOGIA_INVEST_2', nombre: "Metodología de la Investigación en Salud (II)" },
                { id: 'MODELOS_GESTION_KINE', nombre: "Modelos de Gestión en Kinesiterapia" },
                { id: 'TALLER_EMPRENDIMIENTO', nombre: "Taller de Emprendimiento" },
                { id: 'ELECTIVO_2', nombre: "Electivo" },
            ]
        },
        // Semestre 9 (Internados)
        {
            nombre: "Semestre 9 (Internados y Título)",
            ramos: [
                { id: 'INTERNADO_ADULTO_NINOS_1', nombre: "Internado Adulto – Niños I" },
                { id: 'INTERNADO_ADULTO_NINOS_2', nombre: "Internado Adulto – Niños II" },
                { id: 'INTERNADO_ADULTO_NINOS_3', nombre: "Internado Adulto – Niños III" },
                { id: 'INTERNADO_ADULTO_NINOS_4', nombre: "Internado Adulto – Niños IV" },
                { id: 'INTERNADO_ELECTIVO', nombre: "Internado Electivo" },
                { id: 'PROYECTO_TITULO', nombre: "Proyecto de Título" },
            ]
        }
    ]
};


// --- 2. FUNCIONES DE LÓGICA ---

// Almacén para el estado de los ramos aprobados, cargado desde localStorage
let approvedRamos = {};

/**
 * Carga el estado de los ramos aprobados desde el almacenamiento local.
 */
function loadApprovedRamos() {
    const storedRamos = localStorage.getItem('approvedRamosKine');
    if (storedRamos) {
        approvedRamos = JSON.parse(storedRamos);
    } else {
        approvedRamos = {};
    }
}

/**
 * Guarda el estado actual de los ramos aprobados en el almacenamiento local.
 */
function saveApprovedRamos() {
    localStorage.setItem('approvedRamosKine', JSON.stringify(approvedRamos));
}

/**
 * Verifica si un ramo específico está aprobado.
 * @param {string} ramoId - El ID del ramo a verificar.
 * @returns {boolean} - True si está aprobado, False en caso contrario.
 */
function isApproved(ramoId) {
    return approvedRamos[ramoId] === true;
}

/**
 * Verifica si todos los prerrequisitos de un ramo están aprobados.
 * @param {string} ramoId - El ID del ramo a verificar.
 * @returns {object} - { isBlocked: boolean, pending: string[] }
 */
function checkPrerequisites(ramoId) {
    const requiredPrereqs = mallaData.prerequisitos[ramoId];
    if (!requiredPrereqs) {
        return { isBlocked: false, pending: [] }; // No tiene prerrequisitos
    }

    const pendingRamos = [];
    const allRamos = getAllRamosMap();

    for (const prereqId of requiredPrereqs) {
        if (!isApproved(prereqId)) {
            // Busca el nombre del ramo pendiente usando el mapa de todos los ramos
            const ramoName = allRamos[prereqId] || prereqId; 
            pendingRamos.push(ramoName);
        }
    }

    return {
        isBlocked: pendingRamos.length > 0,
        pending: pendingRamos
    };
}

// Mapa auxiliar para buscar el nombre de un ramo por su ID.
let allRamosMap = null;
function getAllRamosMap() {
    if (allRamosMap) return allRamosMap;
    
    allRamosMap = {};
    mallaData.semestres.forEach(semestre => {
        semestre.ramos.forEach(ramo => {
            allRamosMap[ramo.id] = ramo.nombre;
        });
    });
    return allRamosMap;
}

/**
 * Alterna el estado de aprobación de un ramo, verificando prerrequisitos.
 * @param {string} ramoId - El ID del ramo que se intenta aprobar.
 * @param {HTMLElement} element - El elemento DOM del ramo.
 */
function toggleRamoApproval(ramoId, element) {
    if (isApproved(ramoId)) {
        // Si ya está aprobado, se desmarca (solo si no es prerrequisito para un ramo aprobado)
        const isPrereqForApproved = checkIfPrereqForApproved(ramoId);
        
        if (isPrereqForApproved.isPrereq) {
             alert(`No puedes desmarcar este ramo porque es prerrequisito para: ${isPrereqForApproved.dependents.join(', ')}.`);
             return;
        }

        delete approvedRamos[ramoId];
        element.classList.remove('aprobado');
        
    } else {
        // Intenta marcar como aprobado, primero verifica prerrequisitos
        const prereqCheck = checkPrerequisites(ramoId);

        if (prereqCheck.isBlocked) {
            showPrereqMessage(prereqCheck.pending);
            element.classList.add('bloqueado'); // Se agrega la clase 'bloqueado'
            setTimeout(() => element.classList.remove('bloqueado'), 1500); // Se remueve la clase después de un tiempo
            return;
        }

        // Si no está bloqueado, se aprueba
        approvedRamos[ramoId] = true;
        element.classList.add('aprobado');
    }

    // Guarda el nuevo estado
    saveApprovedRamos();

    // Vuelve a renderizar o recalcular el estado de todos los ramos (importante para actualizar el estado de bloqueo)
    renderMalla(); 
}

/**
 * Verifica si un ramo es prerrequisito para otro ramo que ya está aprobado.
 * @param {string} ramoId - El ID del ramo a verificar.
 * @returns {object} - { isPrereq: boolean, dependents: string[] }
 */
function checkIfPrereqForApproved(ramoId) {
    const dependents = [];
    const allRamos = getAllRamosMap();

    for (const dependentId in mallaData.prerequisitos) {
        if (isApproved(dependentId)) {
            const requiredPrereqs = mallaData.prerequisitos[dependentId];
            if (requiredPrereqs && requiredPrereqs.includes(ramoId)) {
                dependents.push(allRamos[dependentId] || dependentId);
            }
        }
    }

    return {
        isPrereq: dependents.length > 0,
        dependents: dependents
    };
}


/**
 * Muestra el pop-up de mensaje de prerrequisitos pendientes.
 * @param {string[]} pendingList - Lista de nombres de ramos pendientes.
 */
function showPrereqMessage(pendingList) {
    const messageBox = document.getElementById('prereq-message');
    const listElement = document.getElementById('prereq-list');

    listElement.innerHTML = ''; // Limpia la lista anterior
    pendingList.forEach(ramoName => {
        const li = document.createElement('li');
        li.textContent = ramoName;
        listElement.appendChild(li);
    });

    messageBox.classList.remove('hidden');
}


// --- 3. RENDERIZADO DEL HTML ---

/**
 * Genera y dibuja toda la malla curricular en el DOM.
 */
function renderMalla() {
    const container = document.getElementById('mallaContainer');
    container.innerHTML = ''; // Limpia el contenedor

    mallaData.semestres.forEach((semestre, index) => {
        const semestreDiv = document.createElement('div');
        semestreDiv.className = 'semestre';
        semestreDiv.innerHTML = `<h3>${semestre.nombre}</h3>`;

        semestre.ramos.forEach(ramo => {
            const prereqCheck = checkPrerequisites(ramo.id);
            const isRamoApproved = isApproved(ramo.id);

            const ramoDiv = document.createElement('div');
            // Inicialmente no se agrega 'bloqueado' a menos que el usuario haga clic.
            // Se agregan solo las clases 'aprobado' o 'no-aprobado' (por defecto)
            ramoDiv.className = `ramo ${isRamoApproved ? 'aprobado' : ''}`;
            ramoDiv.dataset.ramoId = ramo.id;

            const statusIcon = document.createElement('span');
            statusIcon.className = 'ramo-status';
            // Icono de tilde de Font Awesome para aprobado, o un guión/círculo para pendiente.
            statusIcon.innerHTML = isRamoApproved ? '<i class="fas fa-check-circle"></i>' : '<i class="far fa-circle"></i>';

            ramoDiv.innerHTML += `<span>${ramo.nombre}</span>`;
            ramoDiv.appendChild(statusIcon);
            
            // Asigna el evento de clic
            ramoDiv.addEventListener('click', () => {
                toggleRamoApproval(ramo.id, ramoDiv);
            });

            semestreDiv.appendChild(ramoDiv);
        });

        container.appendChild(semestreDiv);
    });
}

// --- 4. INICIALIZACIÓN ---

document.addEventListener('DOMContentLoaded', () => {
    loadApprovedRamos(); // Carga el estado guardado
    renderMalla(); // Dibuja la malla con el estado cargado
    getAllRamosMap(); // Inicializa el mapa de ramos
});
