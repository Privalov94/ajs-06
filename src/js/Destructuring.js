export default function specialAttack(obj) {
  const { special } = obj;

  special.forEach((item) => {
    const result = item;
    if (!result.description) {
      result.description = 'Описание недоступно';
    }
  });

  //   for (let i = 0; i < special.length; i += 1) {
  //     if (!special[i].description) {
  //       special[i].description = 'Описание недоступно';
  //     }
  //     result.push({
  //       id: special[i].id,
  //       name: special[i].name,
  //       icon: special[i].icon,
  //       description: special[i].description,
  //     });
  //   }

  return special;
}
