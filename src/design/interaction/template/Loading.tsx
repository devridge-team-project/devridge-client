import { Interaction } from "@/interface";
import ScriptDesign from "../widget/Script.design";

function Script(props: Omit<Interaction, "script">) {
  return <ScriptDesign script="Loading..." {...props} />;
}

const Loading = { Script };

export default Loading;
