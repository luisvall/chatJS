// Tabla de contactos
 export const contacts = [
    {
        id: 0,
        name: 'Luisvall',
        img: 'assets/img/profileOne.jpg',
        isActive: true,
        lastMessageTime: 'hoy 20:20',
        lastMessage: 'Gracias! estaré feliz de recibir el pedido',
    },
    {
        id: 1,
        name: 'Rebis',
        img: 'assets/img/profile2.jpg',
        isActive: false,
        lastMessageTime: 'hoy 15:30',
        lastMessage: 'Nos vemos mañana',
    },
    {
        id: 2,
        name: 'Carlos',
        img: 'assets/img/profile3.jpg',
        isActive: false,
        lastMessageTime: '23-06-24',
        lastMessage: 'Está bien, gracias!',
    },
    {
        id: 3,
        name: 'Sofía',
        img: 'assets/img/profile4.jpg',
        isActive: false,
        lastMessageTime: '21-09-24',
        lastMessage: 'Te llamo luego',
    },
    {
        id: 4,
        name: 'Marcos',
        img: 'assets/img/profile5.jpg',
        isActive: false,
        lastMessageTime: '21-09-24',
        lastMessage: '¡Buena suerte!',
    }
];



// Tabla de mensajes
export const messages = [
    // Conversación con Luisvall
    {
        id: 1,
        contactId: 0,
        time: '2024-09-23T10:15:00Z',
        isToday: true,
        txt: 'Hola, ¿cómo estás?',
        received: false,
        status: 'sent',
    },
    {
        id: 2,
        contactId: 0,
        time: '2024-09-23T10:20:00Z',
        isToday: true,
        txt: '¡Todo bien, gracias!',
        received: true,
        status: 'delivered',
    },
    {
        id: 3,
        contactId: 0,
        time: '2024-09-23T10:30:00Z',
        isToday: true,
        txt: 'Gracias!',
        received: false,
        status: 'seen',
    },

    // Conversación con Rebis
    {
        id: 4,
        contactId: 1,
        time: '2024-09-22T18:30:00Z',
        isToday: false,
        txt: '¿Qué planes tienes para mañana?',
        received: true,
        status: 'delivered',
    },
    {
        id: 5,
        contactId: 1,
        time: '2024-09-22T18:45:00Z',
        isToday: false,
        txt: 'Nos vemos mañana',
        received: false,
        status: 'sent',
    },

    // Conversación con Carlos
    {
        id: 6,
        contactId: 2,
        time: '2024-09-23T08:50:00Z',
        isToday: true,
        txt: 'Hola, ¿ya recibiste el paquete?',
        received: false,
        status: 'sent',
    },
    {
        id: 7,
        contactId: 2,
        time: '2024-09-23T09:00:00Z',
        isToday: true,
        txt: 'Está bien, gracias!',
        received: true,
        status: 'seen',
    },

    // Conversación con Sofía
    {
        id: 8,
        contactId: 3,
        time: '2024-09-23T08:10:00Z',
        isToday: true,
        txt: '¿Puedes hablar ahora?',
        received: false,
        status: 'sent',
    },
    {
        id: 9,
        contactId: 3,
        time: '2024-09-23T08:20:00Z',
        isToday: true,
        txt: 'Te llamo luego',
        received: true,
        status: 'delivered',
    },

    // Conversación con Marcos
    {
        id: 10,
        contactId: 4,
        time: '2024-09-22T19:50:00Z',
        isToday: false,
        txt: 'Mucha suerte con tu proyecto!',
        received: false,
        status: 'sent',
    },
    {
        id: 11,
        contactId: 4,
        time: '2024-09-22T20:00:00Z',
        isToday: false,
        txt: '¡Buena suerte!',
        received: true,
        status: 'delivered',
    },
    {
        id: 12,
        contactId: 3,
        time: '2024-09-22T19:50:00Z',
        isToday: false,
        txt: 'Mucha suerte con tu proyecto Sofía!',
        received: false,
        status: 'sent',
    },
    {
        id: 13,
        contactId: 2,
        time: '2024-09-22T20:00:00Z',
        isToday: false,
        txt: '¡Buena suerte Carlos!',
        received: false,
        status: 'delivered',
    }
];



