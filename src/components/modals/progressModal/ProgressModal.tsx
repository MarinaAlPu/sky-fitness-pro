import { Button } from "../../button/Button";
import { Input } from "../../input/Input";
import { SPageBackground, SWrapper, STitle, SContent, SItem, SItemTitle } from "./ProgressModal.style";


export const ProgressModal = () => {
  const onSave = () => {
    console.log("Нажали кнопку Сохранить");
  };

  const onChange = () => {
    console.log("Ввели символ в инпут");
  };


  return (
    <SPageBackground>
      <SWrapper>
        <STitle>Мой прогресс</STitle>
        <SContent>

          <SItem>
            <SItemTitle>Сколько раз вы сделали наклоны вперед?</SItemTitle>
            <Input
              type="number"
              onChange={onChange}
              height={{desktop: "52px", mobile: "47px"}}
            />
          </SItem>

          <SItem>
            <SItemTitle>Сколько раз вы сделали наклоны назад?</SItemTitle>
            <Input
              type="number"
              onChange={onChange}
              height={{desktop: "52px", mobile: "47px"}}
            />
          </SItem>

          <SItem>
            <SItemTitle>Сколько раз вы сделали наклоны назад?</SItemTitle>
            <Input
              type="number"
              onChange={onChange}
              height={{desktop: "52px", mobile: "47px"}}
            />
          </SItem>

          <SItem>
            <SItemTitle>Сколько раз вы сделали поднятие ног, согнутых в коленях?</SItemTitle>
            <Input
              type="number"
              onChange={onChange}
              height={{desktop: "52px", mobile: "47px"}}
            />
          </SItem>

          <SItem>
            <SItemTitle>Сколько раз вы сделали поднятие ног, согнутых в коленях?</SItemTitle>
            <Input
              type="number"
              onChange={onChange}
              height={{desktop: "52px", mobile: "47px"}}
            />
          </SItem>

          <SItem>
            <SItemTitle>Сколько раз вы сделали поднятие ног, согнутых в коленях?</SItemTitle>
            <Input
              type="number"
              onChange={onChange}
              height={{desktop: "52px", mobile: "47px"}}
            />
          </SItem>

        </SContent>
        <Button
          onClick={onSave}
        >
          Сохранить
        </Button>
      </SWrapper>
    </SPageBackground>
  )
}