import { Interaction } from "@/interface";
import ScriptDesign from "../widget/Script.design";
import SpinnerDesign from "../widget/Spinner.design";

function Spinner() {
  return <SpinnerDesign />;
}
function Script(props: Omit<Interaction, "script">) {
  return <ScriptDesign script="Loading..." {...props} />;
}

const Loading = { Spinner, Script };

export default Loading;
