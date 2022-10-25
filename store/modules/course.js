import globalAxios from 'axios'

const state = {
  toDoItems: [
    {
      id: 1,
      title: 'Item 1',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tellus at urna condimentum mattis pellentesque id. Senectus et netus et malesuada fames. Risus in hendrerit gravida rutrum quisque non tellus orci ac. ',
      category: 'inProgress',
      markDone: true,
      projectTitle: 'Project 1'
    },
    {
      id: 2,
      title: 'Item 2',
      description: 'Item 2 description',
      category: 'completed',
      markDone: true,
      projectTitle: 'Project 2'
    },
    {
      id: 3,
      title: 'Item 3',
      description: 'Item 3 description',
      category: 'completed',
      markDone: true,
      projectTitle: 'Project 3'
    },
    {
      id: 4,
      title: 'Item 4',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tellus at urna condimentum mattis pellentesque id. Senectus et netus et malesuada fames. Risus in hendrerit gravida rutrum quisque non tellus orci ac. ',
      category: 'done',
      markDone: true,
      projectTitle: 'Project 4'
    },
    {
      id: 5,
      title: 'Item 5',
      description: 'Item 5 description',
      category: 'completed',
      markDone: true,
      projectTitle: 'Project 5'
    },
    {
      id: 6,
      title: 'Item 6',
      description: 'Item 6 description',
      category: 'toDo',
      markDone: true,
      projectTitle: 'Project 6'
    },
    {
      id: 7,
      title: 'Item 7',
      description: 'Item 7 description',
      category: 'toDo',
      markDone: true,
      projectTitle: 'Project 7'
    },
    {
      id: 8,
      title: 'Item 8',
      description: 'Item 8 description',
      category: 'inProgress',
      markDone: true,
      projectTitle: 'Project 8'
    },
    {
      id: 9,
      title: 'Item 9',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tellus at urna condimentum mattis pellentesque id. Senectus et netus et malesuada fames. Risus in hendrerit gravida rutrum quisque non tellus orci ac.',
      category: 'toDo',
      markDone: true,
      projectTitle: 'Project 9'
    }
  ]
}

const mutations = {
  SET_PROJECTS(state, allProjects) {
    state.allTodoItems = allProjects
  },
  SET_PROJECT_DETAIL(state, projectDetail) {
    state.projectDetail = projectDetail
  },
  SET_PROJECTS_OBJECT(state, projectsObjectOfObjects) {
    state.projectsObjectOfObjects = projectsObjectOfObjects
  },
  ADD_PROJECT(state, newProject) {
    const allIds = state.toDoItems.map(item => item.id)
    const newId = Math.max(...allIds) + 1

    state.toDoItems.push({ ...newProject, id: newId })
  }
}

const actions = {
  createProject({ commit }, postInfo) {
    commit('ADD_PROJECT', postInfo)
  },
  getAllProjects({ commit }) {
    // const token = localStorage.getItem('token')
    globalAxios
      .get('/posts/posts.json')
      .then(res => {
        const postsArray = []
        for (const key in res.data) {
          /**  since endpoint returns an object of objects,
           /*   spread this and add a new key value pair
           /*  convert into array of objects
           **/
          postsArray.push({ ...res.data[key], id: key })
        }
        commit('SET_PROJECTS', postsArray)
      })
      .catch(error => {
        console.log(error)
      })
  },
  getProjectDetail({ commit, state }, projectId) {
    // console.log(stringSimilarity.compareTwoStrings('healed', 'sealed'))
    commit('SET_PROJECT_DETAIL', projectId)
  },
  updateProject({ commit, state, dispatch }, projectUpdate) {
    return globalAxios
      .patch(
        '/posts/posts/' + projectUpdate.projectId + '.json',
        projectUpdate.project
      )
      .then(res => {
        return res
      })
      .catch(error => {
        return error
      })
  }
}

const getters = {
  getProjectDetail: state => {
    return state.projectDetail
  },
  getAllProjects: state => {
    return state.allProjects.filter(project => project.projectTitle !== '')
  },
  allItems: state => {
    return state.toDoItems
  },
  groupedItems: state => {
    const inProgress = state.toDoItems.filter(
      item => item.category === 'completed'
    )

    const toDoItems = state.toDoItems.filter(item => item.category === 'toDo')

    const doneItems = state.toDoItems.filter(item => item.category === 'done')
    return {
      Todo: toDoItems,
      'In progress': inProgress,
      'Completed items': doneItems
    }
  },
  doneItems: state => {
    return state.toDoItems.filter(item => item.category === 'completed')
  },
  toDoItems: state => {
    return state.toDoItems.filter(item => item.category === 'toDo')
  },
  inProgress: state => {
    return state.toDoItems.filter(item => item.category === 'inProgress')
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}
