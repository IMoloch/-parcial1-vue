const { ref, defineComponent, createApp, onMounted } = Vue;

const ThemeSwitcher = defineComponent({
    template: `
    <div>
      <h1>{{ isDarkTheme ? 'Tema Oscuro' : 'Tema Claro' }}</h1>
      <button @click="toggleTheme">
        Cambiar a {{ isDarkTheme ? 'Tema Claro' : 'Tema Oscuro' }}
      </button>
    </div>
  `,
  setup() {
    const isDarkTheme = ref(false);

    const toggleTheme = () => {
      isDarkTheme.value = !isDarkTheme.value;
      updateTheme();
    };

    const updateTheme = () => {
      if (isDarkTheme.value) {
        document.body.classList.add('dark-theme'); //agregamos los estilos de dark-theme del body
        document.body.classList.remove('light-theme'); //removemos los estilos de light-theme del body
      } else {
        document.body.classList.add('light-theme');
        document.body.classList.remove('dark-theme');
      }
    };

    // Al montarse el componente ejecuta la funcion updateTheme()
    // así el tema default se aplica al recargar
    onMounted(() => {
      updateTheme();
    });

    return {
      isDarkTheme,
      toggleTheme,
    };
  },
});

// Crea la instancia de Vue y registra el componente
const app = createApp({
  components: {
    'theme-switcher': ThemeSwitcher,
  },
});

// Monta la aplicación en el div con id="app"
app.mount('#app');
