const messages = {
  pt: {
    translations: {
      signup: {
        title: "Registrese",
        toasts: {
          success: "¡Usuario creado exitosamente!!!!",
          fail: "Error al crear usuario. Comprueba los datos proporcionados..",
        },
        form: {
          name: "Nombre",
          email: "Email",
          password: "Contraseña",
        },
        buttons: {
          submit: "Registrar",
          login: "¿Ya tiene una cuenta? ¡Entre!",
        },
      },
      login: {
        title: "Login",
        form: {
          email: "Email",
          password: "contraseña",
        },
        buttons: {
          submit: "Entrar",
          register: "¡Regístrate ahora!",
        },
      },
      plans: {
        form: {
          name: "Nombre",
          users: "Usuarios",
          connections: "Conexiones",
          campaigns: "Campañas",
          schedules: "Horarios",
          enabled: "Habilitadas",
          disabled: "Desabilitadas",
          clear: "Cancelar",
          delete: "Excluir",
          save: "Guardar",
          yes: "Si",
          no: "No",
          money: "COP$",
        },
      },
      companies: {
        title: "Registrar Empresa",
        form: {
          name: "Nombre de la Empresa",
          plan: "Plan",
          token: "Token",
          submit: "Registar",
          success: "¡Empresa creada con éxito!",
        },
      },
      auth: {
        toasts: {
          success: "¡Inicia sesión exitosamente!",
        },
        token: "Token",
      },
      dashboard: {
        charts: {
          perDay: {
            title: "Servicios hoy: ",
          },
        },
      },
      connections: {
        title: "Conexiones",
        toasts: {
          deleted: "¡La conexión de WhatsApp se eliminó con éxito!",
        },
        confirmationModal: {
          deleteTitle: "Borrar",
          deleteMessage: "¿Estás seguro? Esta acción no se puede revertir.",
          disconnectTitle: "Desconectar",
          disconnectMessage:
            "¿Está seguro? Deberá escanear el código QR nuevamente.",
        },
        buttons: {
          add: "Agregar whatsapp",
          disconnect: "Desconectar",
          tryAgain: "Intentar nuevamente",
          qrcode: "CÓDIGO QR",
          newQr: "Nuevo CÓDIGO QR",
          connecting: "Conectando",
        },
        toolTips: {
          disconnected: {
            title: "No se pudo iniciar sesión en WhatsApp",
            content:
              "Asegúrese de que su teléfono esté conectado a Internet e inténtelo nuevamente o solicite un nuevo código QR",
          },
          qrcode: {
            title: "Esperando que se lea el código QR",
            content:
              "Haz clic en el botón 'CÓDIGO QR' y escanea el Código QR con tu celular para iniciar la sesión",
          },
          connected: {
            title: "¡Conexión establecida!",
          },
          timeout: {
            title: "Conexión celular perdida",
            content:
              "Asegúrese de que su teléfono esté conectado a Internet y WhatsApp esté abierto, o haga clic en el botón Desconectar para obtener un nuevo código QR.",
          },
        },
        table: {
          name: "Nombre",
          status: "Estado",
          lastUpdate: "Última actualización",
          default: "Estándar",
          actions: "Acciones",
          session: "Sesión",
        },
      },
      whatsappModal: {
        title: {
          add: "Agregar whatsapp",
          edit: "Editar WhatsApp",
        },
        form: {
          name: "Nombre",
          default: "Estándar",
          sendIdQueue: "Fila",
          timeSendQueue: "Redirigir a la cola en X minutos",
          queueRedirection: "Redirección de fila",
          queueRedirectionDesc: "Seleccione una cola para los contactos que no tienen una cola para ser redirigidos",
          prompt: "Prompt",
          maxUseBotQueues: "Enviar bot X vezes",
          timeUseBotQueues: "Intervalo en minutos entre envíos de bots",
          expiresTicket: "Cerrar chats abiertos después de x minutos",
          expiresInactiveMessage: "Mensaje de apagado por inactividad",
        },
        buttons: {
          okAdd: "Agregar",
          okEdit: "Guardar",
          cancel: "Cancelar",
        },
        success: "WhatsApp se guardó correctamente.",
      },
      qrCode: {
        message: "Escanea el QrCode para iniciar la sesión",
      },
      contacts: {
        title: "Contactos",
        toasts: {
          deleted: "¡Contacto eliminado exitosamente!",
        },
        searchPlaceholder: "Buscar...",
        confirmationModal: {
          deleteTitle: "Borrar.",
          importTitlte: "Importar contactos",
          deleteMessage:
            "¿Estás seguro de que deseas eliminar este contacto? Se perderán todos los servicios relacionados.",
          importMessage: "¿Quieres importar todos los contactos desde tu teléfono?",
        },
        buttons: {
          import: "Importar contactos",
          add: "Agregar contacto",
        },
        table: {
          name: "Nombre",
          whatsapp: "WhatsApp",
          email: "Email",
          actions: "Acciones",
        },
      },
      queueIntegrationModal: {
        title: {
          add: "Agregar proyecto",
          edit: "Editar proyecto",
        },
        form: {
          id: "ID",
          type: "Tipo",
          name: "Nombre",
          projectName: "Nombre del proyecto",
          language: "Idioma",
          jsonContent: "JsonContent",
          urlN8N: "URL",
          typebotSlug: "Typebot - Slug",
          typebotExpires: "Tiempo en minutos para que caduque una conversación",
          typebotKeywordFinish: "Palabra para finalizar el ticket",
          typebotKeywordRestart: "Palabra para reiniciar el flujo.",
          typebotRestartMessage: "Mensaje al reiniciar la conversación",
          typebotUnknownMessage: "Mensaje de opción no válida",
          typebotDelayMessage: "Intervalo (ms) entre mensajes",   
        },
        buttons: {
          okAdd: "Agregar",
          okEdit: "Guardar",
          cancel: "Cancelar",
          test: "Prueba de Bot",
        },
        messages: {
          testSuccess: "¡Integración probada con éxito!",
          addSuccess: "La integración se agregó correctamente.",
          editSuccess: "Integración editada exitosamente.",
        },
      },
      promptModal: {
        form: {
          name: "Nombre",
          prompt: "Prompt",
          voice: "Voz",
          max_tokens: "Tokens máximos en respuesta",
          temperature: "Temperatura",
          apikey: "API Key",
          max_messages: "Mensajes máximos en el historial",
          voiceKey: "Clave API de voz",
          voiceRegion: "Región de voz",
        },
        success: "Prompt guardado exitosamente!",
        title: {
          add: "Agregar Prompt",
          edit: "Editar Prompt",
        },
        buttons: {
          okAdd: "Agregar",
          okEdit: "Guardar",
          cancel: "Cancelar",
        },
      },
      prompts: {
        title: "Prompts",
        table: {
          name: "Nombre",
          queue: "Sector/Fila",
          max_tokens: "Maximo de Tokens por respuesta",
          actions: "Acciones",
        },
        confirmationModal: {
          deleteTitle: "Borrar",
          deleteMessage: "¿Estás seguro? ¡Esta acción no se puede revertir!",
        },
        buttons: {
          add: "Agregar Prompt",
        },
      },
      contactModal: {
        title: {
          add: "Agregar contacto",
          edit: "Editar contacto",
        },
        form: {
          mainInfo: "Datos de contacto",
          extraInfo: "Informacion adicional",
          name: "Nombre",
          number: "Numero de Whatsapp",
          email: "Email",
          extraName: "Nombre del campo",
          extraValue: "Valor",
          whatsapp: "Conexión de origen: "
        },
        buttons: {
          addExtraInfo: "Añadir información",
          okAdd: "Agregar",
          okEdit: "Guargar",
          cancel: "Cancelar",
        },
        success: "Contacto guardado exitosamente.",
      },
      queueModal: {
        title: {
          add: "Agregar fila",
          edit: "Editar fila",
        },
        form: {
          name: "Nombre",
          color: "Color",
          greetingMessage: "Mensaje de saludo",
          complationMessage: "Mensaje de finalización",
          outOfHoursMessage: "Mensaje fuera de horario",
          ratingMessage: "Revisar mensaje",
          token: "Token",
          orderQueue: "Orden de fila (Bot)",
          integrationId: "Integración",
        },
        buttons: {
          okAdd: "Agregar",
          okEdit: "Guardar",
          cancel: "Cancelar",
        },
      },
      userModal: {
        title: {
          add: "Agregar Usuario",
          edit: "Editar Usuario",
        },
        form: {
          name: "Nombre",
          email: "Email",
          password: "Contraseña",
          profile: "Perfil",
          whatsapp: "Conexión estándar"
        },
        buttons: {
          okAdd: "Agregar",
          okEdit: "Guardar",
          cancel: "Cancelar",
        },
        success: "Usuario guardado exitosamente.",
      },
      scheduleModal: {
        title: {
          add: "Nuevo horario",
          edit: "Editar horario",
        },
        form: {
          body: "Mensaje",
          contact: "Contacto",
          sendAt: "Fecha de programacion",
          sentAt: "Fecha de envío",
        },
        buttons: {
          okAdd: "Agregar",
          okEdit: "Guardar",
          cancel: "Cancelar",
        },
        success: "Cita guardada exitosamente.",
      },
      tagModal: {
        title: {
          add: "Nueva etiqueta",
          edit: "Editar etiqueta",
        },
        form: {
          name: "Nombre",
          color: "Color",
        },
        buttons: {
          okAdd: "Agregar",
          okEdit: "Guardar",
          cancel: "Cancelar",
        },
        success: "Etiqueta guardada exitosamente.",
      },
      chat: {
        noTicketMessage: "Seleccione un ticket para comenzar a chatear.",
      },
      uploads: {
        titles: {
          titleUploadMsgDragDrop: "ARRASTRA Y SUELTA ARCHIVOS EN EL CAMPO A CONTINUACIÓN",
          titleFileList: "Lista de archivo(s)"
        },
      },
      ticketsManager: {
        buttons: {
          newTicket: "Nuevo",
        },
      },
      ticketsQueueSelect: {
        placeholder: "Filas",
      },
      tickets: {
        toasts: {
          deleted: "El servicio en el que estabas ha sido eliminado.",
        },
        notification: {
          message: "Mensaje de",
        },
        tabs: {
          open: { title: "Abiertos" },
          closed: { title: "Resueltos" },
          search: { title: "Buscar" },
        },
        search: {
          placeholder: "Buscar atendimento e mensagens",
        },
        buttons: {
          showAll: "Todos",
        },
      },
      transferTicketModal: {
        title: "Transferir Ticket",
        fieldLabel: "Escriba para buscar usuarios",
        fieldQueueLabel: "Transferir para fila",
        fieldQueuePlaceholder: "Seleccione una fila",
        noOptions: "Nenhum usuário encontrado com esse nome",
        buttons: {
          ok: "Transferir",
          cancel: "Cancelar",
        },
      },
      ticketsList: {
        pendingHeader: "Esperando",
        assignedHeader: "Atendiendo",
        noTicketsTitle: "Nada por aqui!",
        noTicketsMessage:
          "No se encontró ningún servicio con este estado o término de búsqueda",
        buttons: {
          accept: "Aceptar",
          closed: "Finalizar",
          reopen: "Reabrir"
        },
      },
      newTicketModal: {
        title: "Crear Ticket",
        fieldLabel: "Escriba para buscar el contacto",
        add: "Agregar",
        buttons: {
          ok: "Guardar",
          cancel: "Cancelar",
        },
      },
      mainDrawer: {
        listItems: {
          dashboard: "Panel",
          connections: "Conexiones",
          tickets: "Atenciones",
          quickMessages: "Respuestas Rápidas",
          contacts: "Contactos",
          queues: "Filas & Chatbot",
          tags: "Etiquetas",
          administration: "Administración",
          users: "Usuarios",
          settings: "Ajustes",
          helps: "Ayuda",
          messagesAPI: "API",
          schedules: "Horarios",
          campaigns: "Campañas",
          annoucements: "Boletines",
          chats: "Chat Interno",
          financeiro: "Financiero",
          files: "Lista de archivos",
          prompts: "Open.Ai",
          queueIntegration: "Integraciones",
        },
        appBar: {
          user: {
            profile: "Perfil",
            logout: "Salir",
          },
        },
      },
      queueIntegration: {
        title: "Integraciones",
        table: {
          id: "ID",
          type: "Tipo",
          name: "Nombre",
          projectName: "Nombre del proyecto",
          language: "Idioma",
          lastUpdate: "Última actualización",
          actions: "Acciones",
        },
        buttons: {
          add: "Agregar Projeto",
        },
        searchPlaceholder: "Buscar...",
        confirmationModal: {
          deleteTitle: "Borrar",
          deleteMessage:
            "¿Estás seguro? ¡Esta acción no se puede revertir! y será eliminado de las colas y conexiones vinculadas",
        },
      },
      files: {
        title: "Lista de archivos",
        table: {
          name: "Nombre",
          contacts: "Contactos",
          actions: "Accion",
        },
        toasts: {
          deleted: "¡Lista eliminada exitosamente!",
          deletedAll: "¡Todas las listas se han eliminado correctamente!",
        },
        buttons: {
          add: "Agregar",
          deleteAll: "Eliminar todos",
        },
        confirmationModal: {
          deleteTitle: "Eliminar",
          deleteAllTitle: "Eliminar Todos",
          deleteMessage: "¿Estás seguro de que deseas eliminar esta lista?",
          deleteAllMessage: "¿Está seguro de que desea eliminar todas las listas?",
        },
      },
      messagesAPI: {
        title: "API",
        textMessage: {
          number: "Numero",
          body: "Mensaje",
          token: "Token registrado",
        },
        mediaMessage: {
          number: "Numero",
          body: "Nombre del archivo",
          media: "Archivo",
          token: "Token registrado",
        },
      },
      notifications: {
        noTickets: "Ninguna Notificacion",
      },
      quickMessages: {
        title: "Respuestas Rápidas",
        searchPlaceholder: "Buscar...",
        noAttachment: "no hay adjuntos",
        confirmationModal: {
          deleteTitle: "Exclusión",
          deleteMessage: "¡Esta acción es irreversible! Quieres proceder?",
        },
        buttons: {
          add: "Agregar",
          attach: "Adjuntar archivo",
          cancel: "Cancelar",
          edit: "Editar",
        },
        toasts: {
          success: "¡Atajo agregado exitosamente!",
          deleted: "¡El acceso directo se eliminó con éxito!",
        },
        dialog: {
          title: "Mensaje rápido",
          shortcode: "Atajo",
          message: "Respuesta",
          save: "Guardar",
          cancel: "Cancelar",
          geral: "Permitir editar",
          add: "Agregar",
          edit: "Editar",
          visao: "Permitir vista",
        },
        table: {
          shortcode: "Atajo",
          message: "Mensaje",
          actions: "Acciones",
          mediaName: "Nombre del archivo",
          status: "Estado",
        },
      },
      messageVariablesPicker: {
        label: "Variables disponibles",
        vars: {
          contactFirstName: "Primer nombre",
          contactName: "Nombre",
          greeting: "Saludo",
          protocolNumber: "Protocolo",
          date: "Fecha",
          hour: "Hora",
        },
      },
      contactLists: {
        title: "Listas de Contactos",
        table: {
          name: "Nombre",
          contacts: "Contactos",
          actions: "Aciones",
        },
        buttons: {
          add: "Nueva Lista",
        },
        dialog: {
          name: "Nombre",
          company: "Empresa",
          okEdit: "Editar",
          okAdd: "Agregar",
          add: "Agregar",
          edit: "Editar",
          cancel: "Cancelar",
        },
        confirmationModal: {
          deleteTitle: "Excluir",
          deleteMessage: "Esta acción no se puede revertir.",
        },
        toasts: {
          deleted: "Registro eliminado",
        },
      },
      contactListItems: {
        title: "Contactos",
        searchPlaceholder: "Buscar",
        buttons: {
          add: "Nuevo",
          lists: "Listas",
          import: "Importar",
        },
        dialog: {
          name: "Nombre",
          number: "Numero",
          whatsapp: "Whatsapp",
          email: "E-mail",
          okEdit: "Editar",
          okAdd: "Agregar",
          add: "Agregar",
          edit: "Editar",
          cancel: "Cancelar",
        },
        table: {
          name: "Nombre",
          number: "Numero",
          whatsapp: "Whatsapp",
          email: "E-mail",
          actions: "Acciones",
        },
        confirmationModal: {
          deleteTitle: "Borrar",
          deleteMessage: "Esta acción no se puede revertir.",
          importMessage: "¿Quieres importar contactos desde esta hoja de cálculo?",
          importTitlte: "Importar",
        },
        toasts: {
          deleted: "Registro eliminado",
        },
      },
      campaigns: {
        title: "Campañas",
        searchPlaceholder: "Buscar",
        buttons: {
          add: "Nueva campaña",
          contactLists: "Listas de contactos",
        },
        table: {
          name: "Nombre",
          whatsapp: "Conexión",
          contactList: "Lista de contactos",
          status: "Estado",
          scheduledAt: "Planificación",
          completedAt: "Terminada",
          confirmation: "Confirmación",
          actions: "Acciones",
        },
        dialog: {
          new: "Nueva campaña",
          update: "Editar campaña",
          readonly: "Sólo vista",
          form: {
            name: "Nombre",
            message1: "Mensaje 1",
            message2: "Mensaje 2",
            message3: "Mensaje 3",
            message4: "Mensaje 4",
            message5: "Mensaje 5",
            confirmationMessage1: "Mensaje de confirmación 1",
            confirmationMessage2: "Mensaje de confirmación 2",
            confirmationMessage3: "Mensaje de confirmación 3",
            confirmationMessage4: "Mensaje de confirmación 4",
            confirmationMessage5: "Mensaje de confirmación 5",
            messagePlaceholder: "Contenido del mensaje",
            whatsapp: "Conexión",
            status: "Estado",
            scheduledAt: "Planificación",
            confirmation: "Confirmación",
            contactList: "Lista de Contacto",
            tagList: "Lista de etiquetas",
            fileList: "Lista de archivos"
          },
          buttons: {
            add: "Agregar",
            edit: "Actualizar",
            okadd: "Ok",
            cancel: "Cancelar Envios",
            restart: "Reiniciar Envios",
            close: "Cerrar",
            attach: "Adjuntar archivo",
          },
        },
        confirmationModal: {
          deleteTitle: "Eliminar",
          deleteMessage: "Esta acción no se puede revertir.",
        },
        toasts: {
          success: "Operación realizada con éxito",
          cancel: "Campaña cancelada",
          restart: "Campaña reiniciada",
          deleted: "Registro eliminado",
        },
      },
      announcements: {
        active: 'Activo',
        inactive: 'Inactivo',
        title: "Boletines",
        searchPlaceholder: "Buscar",
        buttons: {
          add: "Nuevo boletín",
          contactLists: "Listas de noticias",
        },
        table: {
          priority: "Prioridad",
          title: "Título",
          text: "Texto",
          mediaName: "Archivo",
          status: "Estado",
          actions: "Acciones",
        },
        dialog: {
          edit: "Edición del boletín",
          add: "Nuevo boletín",
          update: "Editar boletín",
          readonly: "Sólo vista",
          form: {
            priority: "Prioridad",
            title: "Titulo",
            text: "Texto",
            mediaPath: "Archivo",
            status: "Estado",
          },
          buttons: {
            add: "Agregar",
            edit: "Actualizar",
            okadd: "Ok",
            cancel: "Cancelar",
            close: "Cerrar",
            attach: "Adjuntar archivo",
          },
        },
        confirmationModal: {
          deleteTitle: "Borrar",
          deleteMessage: "Esta acción no se puede revertir.",
        },
        toasts: {
          success: "Operación realizada con éxito",
          deleted: "Registro eliminado",
        },
      },
      campaignsConfig: {
        title: "Configuración de campaña",
      },
      queues: {
        title: "Filas & Chatbot",
        table: {
          name: "Nombre",
          color: "Color",
          greeting: "Mensaje de saludo",
          actions: "Aciones",
          orderQueue: "Orden de fila (bot)",
        },
        buttons: {
          add: "Agregar fila",
        },
        confirmationModal: {
          deleteTitle: "Borrar",
          deleteMessage:
            "¿Estás seguro? ¡Esta acción no se puede revertir! Los servicios en esta cola seguirán existiendo, pero ya no tendrán ninguna cola asignada.",
        },
      },
      queueSelect: {
        inputLabel: "Filas",
      },
      users: {
        title: "Usuários",
        table: {
          name: "Nombre",
          email: "Email",
          profile: "Perfil",
          actions: "Acciones",
        },
        buttons: {
          add: "Agregar usuário",
        },
        toasts: {
          deleted: "Usuario eliminado exitosamente.",
        },
        confirmationModal: {
          deleteTitle: "Borrar",
          deleteMessage:
            "Todos los datos del usuario se perderán. Las llamadas abiertas de este usuario se moverán a la cola.",
        },
      },
      helps: {
        title: "centro de ayuda",
      },
      schedules: {
        title: "Horarios",
        confirmationModal: {
          deleteTitle: "¿Está seguro de que desea eliminar este programa?",
          deleteMessage: "Esta acción no se puede revertir.",
        },
        table: {
          contact: "Contacto",
          body: "Mensage",
          sendAt: "Fecha de programacion",
          sentAt: "Fecha de envío",
          status: "Estado",
          actions: "Acciones",
        },
        buttons: {
          add: "Nuevo horario",
        },
        toasts: {
          deleted: "Programación eliminada exitosamente.",
        },
      },
      tags: {
        title: "Etiquetas",
        confirmationModal: {
          deleteTitle: "¿Estás seguro de que deseas eliminar esta etiqueta?",
          deleteMessage: "Esta acción no se puede revertir.",
        },
        table: {
          name: "Nombre",
          color: "Color",
          tickets: "Registros de etiquetas",
          actions: "Acciones",
        },
        buttons: {
          add: "Nueva etiqueta",
        },
        toasts: {
          deleted: "Etiqueta eliminada correctamente.",
        },
      },
      settings: {
        success: "La configuración se guardó correctamente.",
        title: "Ajustes",
        settings: {
          userCreation: {
            name: "Creación de usuarios",
            options: {
              enabled: "Activado",
              disabled: "Desactivado",
            },
          },
        },
      },
      messagesList: {
        header: {
          assignedTo: "Asignado a:",
          buttons: {
            return: "Regresar",
            resolve: "Resolver",
            reopen: "Reabrir",
            accept: "Aceptarr",
          },
        },
      },
      messagesInput: {
        placeholderOpen: "Introduce un mensaje",
        placeholderClosed:
          "Vuelva a abrir o acepte este ticket para enviar un mensaje.",
        signMessage: "Asignar",
      },
      contactDrawer: {
        header: "Datos de contacto",
        buttons: {
          edit: "Editar contacto",
        },
        extraInfo: "Otras informaciones",
      },
      fileModal: {
        title: {
          add: "Agregar lista de archivos",
          edit: "Editar lista de archivos",
        },
        buttons: {
          okAdd: "Guardar",
          okEdit: "Editar",
          cancel: "Cancelar",
          fileOptions: "Agregar archivo",
        },
        form: {
          name: "Nombre de la lista de archivos",
          message: "Detalles de la lista",
          fileOptions: "Lista de archivos",
          extraName: "Mensaje para enviar con archivo",
          extraValue: "Valor de la opción",
        },
        success: "¡La lista de archivos se guardó correctamente!",
      },
      ticketOptionsMenu: {
        schedule: "Planificación",
        delete: "Borrar",
        transfer: "Transferir",
        registerAppointment: "Notas de contacto",
        appointmentsModal: {
          title: "Notas de contacto",
          textarea: "Observación",
          placeholder: "Ingresa aquí los datos que deseas registrar",
        },
        confirmationModal: {
          title: "Eliminar el ticket del contacto",
          message:
            "¡Atención! Se perderán todos los mensajes relacionados con el ticket.",
        },
        buttons: {
          delete: "Borrar",
          cancel: "Cancelar",
        },
      },
      confirmationModal: {
        buttons: {
          confirm: "Ok",
          cancel: "Cancelar",
        },
      },
      messageOptionsMenu: {
        delete: "Borrar",
        reply: "Responder",
        confirmationModal: {
          title: "¿Borrar mensaje?",
          message: "Esta acción no se puede revertir.",
        },
      },
      backendErrors: {
        ERR_NO_OTHER_WHATSAPP: "Debe haber al menos un WhatsApp predeterminado.",
        ERR_NO_DEF_WAPP_FOUND:
          "No se encontró ningún WhatsApp predeterminado. Consulta la página de conexiones.",
        ERR_WAPP_NOT_INITIALIZED:
          "Esta sesión de WhatsApp no ​​se ha inicializado. Consulta la página de conexiones.",
        ERR_WAPP_CHECK_CONTACT:
          "No se puede verificar el contacto de WhatsApp. Consulta la página de conexiones.",
        ERR_WAPP_INVALID_CONTACT: "Este no es un número de WhatsApp válido.",
        ERR_WAPP_DOWNLOAD_MEDIA:
          "No se pueden descargar medios de WhatsApp. Consulta la página de conexiones.",
        ERR_INVALID_CREDENTIALS:
          "Error de autenticación. Inténtalo de nuevo.",
        ERR_SENDING_WAPP_MSG:
          "Error al enviar mensaje de WhatsApp. Consulta la página de conexiones.",
        ERR_DELETE_WAPP_MSG: "No se puede eliminar el mensaje de WhatsApp.",
        ERR_OTHER_OPEN_TICKET: "Ya hay un ticket abierto para este contacto.",
        ERR_SESSION_EXPIRED: "Sesión expirada. Por favor entre.",
        ERR_USER_CREATION_DISABLED:
          "El administrador ha desactivado la creación de usuarios.",
        ERR_NO_PERMISSION: "No tienes permiso para acceder a este recurso.",
        ERR_DUPLICATED_CONTACT: "Ya existe un contacto con este número.",
        ERR_NO_SETTING_FOUND: "No se encontró ninguna configuración con este ID.",
        ERR_NO_CONTACT_FOUND: "No se encontraron contactos con este ID.",
        ERR_NO_TICKET_FOUND: "No se encontraron boletos con esta identificación.",
        ERR_NO_USER_FOUND: "No se encontraron usuarios con este ID.",
        ERR_NO_WAPP_FOUND: "No se encontró ningún WhatsApp con este ID.",
        ERR_CREATING_MESSAGE: "Error al crear mensaje en la base de datos.",
        ERR_CREATING_TICKET: "Error al crear ticket en la base de datos.",
        ERR_FETCH_WAPP_MSG:
          "Error al buscar el mensaje en WhatsApp, quizás sea demasiado antiguo.",
        ERR_QUEUE_COLOR_ALREADY_EXISTS:
          "Este color ya está en uso, elige otro.",
        ERR_WAPP_GREETING_REQUIRED:
          "El mensaje de saludo es obligatorio cuando hay más de una cola.",
      },
    },
  },
};

export { messages };
