//Argentina tiene un promedio de 15 dólares la hora de desarrollo.
const reference = {
  trainee: 5,
  junior: 9,
  ssr: 15,
  sr: 30,
};
const hourOfDevelopment = (value) => {
  return value;
};
const costPerTime = {
  hour: hourOfDevelopment,
  day: hourOfDevelopment * 6,
  month: hourOfDevelopment * 6 * 21,
};
//Hacer toma de requerimientos
function requirementsGathering(totalcost, gatherType) {
  if (!isNaN(totalcost) && gatherType) {
    const type = { normal: totalcost * 0.1, extensive: totalcost * 0.25 };
    return type[gatherType];
  } else {
    return "Error de toma";
  }
}
//Calcular coste de dominio
const costDomain = {
  com: 10,
  ar: 2,
  net: 34,
  comar: 4,
};
//Calcular coste de despliegue
const costDeploy = 3;
//Calcular coste de base de datos
const costDbMonth = 8.5;
//Calcular coste de mantenimiento
const costMaintenance = {
  small: 5,
  medium: 30,
  large: 150,
  multimedia: 350,
};
//Calcular coste de diseño
const designCost = {
  standard: { small: 20, medium: 25, large: 50 },
  pro: { small: 120, medium: 180, large: 300 },
  uxui: { small: 70, medium: 100, large: 200 },
};
//Costo total de desarrollo
function developmentCost(n, time) {
  if (!isNaN(n)) return n * time;
}
