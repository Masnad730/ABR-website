import axios from 'axios'

//  headers: {
//     'Access-Control-Allow-Origin': '*',
//     'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
//     // update with your user-agent
//   },

export async function getAdvisors() {
  const advisors = await axios
    .get('https://wpbackend.navisa.af/wp-json/wp/v2/abr-advisor/?per_page=20')
    .then((res) => res.data)
    .catch((err) => console.log(err))

  return advisors
}

export async function getPracticeArea(id) {
  const practiceArea = await axios
    .get(`https://wpbackend.navisa.af/wp-json/wp/v2/abr-advisor-practice/${id}`)
    .then((res) => res.data)
    .catch((err) => console.log(err))

  return practiceArea
}
export async function getAllPracticeAreas() {
  const practiceAreas = await axios
    .get('https://wpbackend.navisa.af/wp-json/wp/v2/abr-advisor-practice/?per_page=50')
    .then((res) => res.data)
    .catch((err) => console.log(err))

  return practiceAreas
}

export async function findAdvisorForPractice(practiceArea) {
  const advisors = await axios
    .get('https://wpbackend.navisa.af/wp-json/wp/v2/abr-advisor/?per_page=20')
    .then((res) => res.data)
    .catch((err) => console.log(err))

  const selectedAdvisor = advisors.filter((advisor) =>
    advisor.acf.practice_area.find((area) => area.post_title === practiceArea)
  )
  return selectedAdvisor
}

export async function getPosts() {
  const posts = await axios
    .get('https://wpbackend.navisa.af/wp-json/wp/v2/masnad-insights/?per_page=100')
    .then((res) => res.data)
    .catch((err) => console.log(err))
  // const res = await fetch(
  //   'https://wpbackend.navisa.af/wp-json/wp/v2/masnad-insights/?per_page=100',
  //   {
  //     method: 'GET',
  //     headers: {
  //       // update with your user-agent
  //       'User-Agent': '*',
  //       'Content-Type': 'application/json; charset=UTF-8',
  //     },
  //   }
  // )
  // const posts = await res.json()

  return posts
}
