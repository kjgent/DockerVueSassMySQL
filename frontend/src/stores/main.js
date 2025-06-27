import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const NavigationTypes = {
  Home: { index: 1, title: 'Home' },
  Health: { index: 2, title: 'Health' },
  Wealth: { index: 3, title: 'Wealth' }
}

export const useMainStore = defineStore('main', () => {

  //state properties
  const currentNav = ref(NavigationTypes.Home);
  const age = ref(35);

  // getters
  const getAge = computed(() => age.value);
  const getCurrentNavigation = computed(() => currentNav.value)

  //actions
  const incrementAge = () => {
    age.value++;
  }

  return { age, getCurrentNavigation, getAge, incrementAge }
})

