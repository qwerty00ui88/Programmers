function solution(skill, skill_trees) {
    let regex = new RegExp(`[^${skill}]`, 'g')
    const replaced = skill_trees.map(el => el.replace(regex, ''))
    const filtered = replaced.filter(el => skill.indexOf(el) === 0 || !el)
    return filtered.length
}