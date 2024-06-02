anychart.onDocumentReady(function () {
    // create data
    var data = [
        {id: "1", name: "Gestión del Proyecto", actualStart: "2024-06-01", actualEnd: "2024-07-05", children: [
            {id: "1.1", name: "Iniciación", actualStart: "2024-06-01", actualEnd: "2024-06-14", children: [
                {id: "1.1.1", name: "Acta de constitución del proyecto", actualStart: "2024-06-01", actualEnd: "2024-06-07"},
                {id: "1.1.2", name: "Identificación de los objetivos", actualStart: "2024-06-01", actualEnd: "2024-06-07"},
                {id: "1.1.3", name: "Definición del alcance del proyecto", actualStart: "2024-06-08", actualEnd: "2024-06-14"},
                {id: "1.1.4", name: "Identificación de los interesados", actualStart: "2024-06-08", actualEnd: "2024-06-14"}
            ]},
            {id: "1.2", name: "Planificación", actualStart: "2024-06-15", actualEnd: "2024-06-28", children: [
                {id: "1.2.1", name: "Desarrollo del plan del proyecto", actualStart: "2024-06-15", actualEnd: "2024-06-21"},
                {id: "1.2.2", name: "Definición del cronograma", actualStart: "2024-06-22", actualEnd: "2024-06-28"},
                {id: "1.2.3", name: "Planificación de recursos", actualStart: "2024-06-22", actualEnd: "2024-06-28"}
            ]},
            {id: "1.3", name: "Ejecución", actualStart: "2024-06-29", actualEnd: "2024-07-12", children: [
                {id: "1.3.1", name: "Coordinación del equipo de trabajo", actualStart: "2024-06-29", actualEnd: "2024-07-05"},
                {id: "1.3.2", name: "Monitoreo y control de tareas", actualStart: "2024-07-06", actualEnd: "2024-07-12"}
            ]},
            {id: "1.4", name: "Cierre", actualStart: "2024-07-13", actualEnd: "2024-07-19", children: [
                {id: "1.4.1", name: "Entrega del proyecto", actualStart: "2024-07-13", actualEnd: "2024-07-16"},
                {id: "1.4.2", name: "Evaluación post-proyecto", actualStart: "2024-07-17", actualEnd: "2024-07-19"}
            ]}
        ]},
        {id: "2", name: "Gestión del Producto", actualStart: "2024-07-06", actualEnd: "2024-09-13", children: [
            {id: "2.1", name: "Análisis", actualStart: "2024-07-06", actualEnd: "2024-07-12", children: [
                {id: "2.1.1", name: "Recolección de requerimientos", actualStart: "2024-07-06", actualEnd: "2024-07-08"},
                {id: "2.1.2", name: "Identificación de competencias clave", actualStart: "2024-07-09", actualEnd: "2024-07-10"},
                {id: "2.1.3", name: "Requisitos de Big Data", actualStart: "2024-07-11", actualEnd: "2024-07-12"}
            ]},
            {id: "2.2", name: "Diseño", actualStart: "2024-07-13", actualEnd: "2024-07-19", children: [
                {id: "2.2.1", name: "Diseño de la arquitectura del sistema Big Data", actualStart: "2024-07-13", actualEnd: "2024-07-14"},
                {id: "2.2.2", name: "Diseño de algoritmos de evaluación", actualStart: "2024-07-15", actualEnd: "2024-07-16"},
                {id: "2.2.3", name: "Diseño de la base de datos NoSQL", actualStart: "2024-07-17", actualEnd: "2024-07-19"}
            ]},
            {id: "2.3", name: "Desarrollo", actualStart: "2024-07-20", actualEnd: "2024-08-09", children: [
                {id: "2.3.1", name: "Implementación de la base de datos NoSQL", actualStart: "2024-07-20", actualEnd: "2024-07-26"},
                {id: "2.3.2", name: "Desarrollo de algoritmos de Big Data", actualStart: "2024-07-27", actualEnd: "2024-08-02"},
                {id: "2.3.3", name: "Desarrollo de la interfaz de usuario", actualStart: "2024-08-03", actualEnd: "2024-08-09"}
            ]},
            {id: "2.4", name: "Pruebas", actualStart: "2024-08-10", actualEnd: "2024-08-30", children: [
                {id: "2.4.1", name: "Pruebas unitarias", actualStart: "2024-08-10", actualEnd: "2024-08-16"},
                {id: "2.4.2", name: "Pruebas de integración", actualStart: "2024-08-17", actualEnd: "2024-08-23"},
                {id: "2.4.3", name: "Pruebas de aceptación", actualStart: "2024-08-24", actualEnd: "2024-08-30"}
            ]},
            {id: "2.5", name: "Implementación", actualStart: "2024-08-31", actualEnd: "2024-09-13", children: [
                {id: "2.5.1", name: "Despliegue del sistema en producción", actualStart: "2024-08-31", actualEnd: "2024-09-03"},
                {id: "2.5.2", name: "Capacitación del personal", actualStart: "2024-09-04", actualEnd: "2024-09-10"},
                {id: "2.5.3", name: "Documentación del sistema", actualStart: "2024-09-11", actualEnd: "2024-09-13"}
            ]}
        ]}
    ];

    // create a Gantt chart
    var chart = anychart.ganttProject();

    // set the data
    chart.data(data, "as-tree");

    // configure the chart title
    chart.title("Cronograma del Proyecto");

    // set the container id
    chart.container("ganttChart");

    // initiate drawing the chart
    chart.draw();
});
