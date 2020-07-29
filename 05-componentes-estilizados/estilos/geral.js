import metricas from "./metricas";
import cores from "./cores";
import fontes from "./fontes";

const geral = {
  container: {
    flex: 1,
    backgroundColor: cores.background,
  },
  section: {
    margin: metricas.doubleBaseMargin,
  },
  sectionTitle: {
    color: cores.primario,
    fontWeight: "bold",
    fontSize: fontes.regular,
    alignSelf: "center",
    marginBottom: metricas.doubleBaseMargin,
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
    padding: 10,
    color: "red",
  },
  textContainer: {
    padding: 10,
    borderWidth: 3,
    borderColor: "red",
  },
};

export default geral;
