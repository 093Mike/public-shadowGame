
import Text from "./Elements/Text/Text"
import PanelStart from "./Elements/HomeElements/PanelStart/PanelStart";
import Credits from "./Elements/HomeElements/Credits/Credits"
import Header from "./Elements/HomeElements/Header/Header";
import PanelGame from "./Elements/GameElements/Survival/PanelGame";
import Dialogue from "./Elements/GameElements/Dialogue/Dialogue";
import InitCharacter from "./Elements/GameElements/InitCharacter/InitCharacter";
import PanelCombat from "./Elements/GameElements/Combat/PanelCombat";
import CharacterCombat from "./Elements/GameElements/Combat/CharacterCombat/CharacterCombat";
import History from "./Elements/GameElements/Dialogue/History";
import Button from "./Elements/Button/Button";

class Composer{
  static add = (elem, params) => {
    
    return {
        text : <Text params={params} />,
        button : <Button params={params} />,
        header: <Header params={params}/>,
        panelStart : <PanelStart params={params} />,
        panelGame : <PanelGame params={params} />,
        panelCombat : <PanelCombat params = {params}/>,
        characterCombat : <CharacterCombat params={params} />,
        dialogue : <Dialogue params={params} />,
        history: <History params={params}/>,
        initCharacter : <InitCharacter params={params}/>,
        credits : <Credits params={params} />
    }[elem];
  }
}
export default Composer;