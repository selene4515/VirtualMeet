import { useCallback, useState } from "react";
import styled from "styled-components";

type PropsData = {
  icon: string;
  text: string;
  onclickpromise?: () => Promise<void | Response> | undefined;
};

export const DwlBtn = ({ onclickpromise, icon, text }: PropsData) => {
  const [isSending, setIsSending] = useState(false);

  const asynButtonClick = useCallback(async () => {
    if (isSending) return;
    if (!onclickpromise) return;
    setIsSending(true);

    try {
      const response = await onclickpromise();
      if (response) {
        setIsSending(false);
      }
    } catch {
      console.warn("Check the api call on this button.");
      setIsSending(false);
    }
  }, [isSending, setIsSending, onclickpromise]);

  return (
    <>
      <Btn onClick={asynButtonClick}>
        <div>
          <img src={icon} alt={text} />
          Download {text}
        </div>
      </Btn>
    </>
  );
};

const Btn = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 0.75rem;

  border-radius: 0.375rem;

  font-weight: 600;
  font-size: 1.25rem;
  line-height: 1.4375rem;

  margin: 0 1.875rem;

  img {
    margin-right: 0.875rem;
  }

  div {
    padding: 1rem 2.25rem;
    margin: 0.125rem 0.1875rem;
    border-radius: 0.375rem;
    background: #1d2022;

    display: flex;
    justify-content: center;
    align-items: center;
  }

  background: radial-gradient(
        34.06% 92% at 100% 11.09%,
        #3381a3 0%,
        rgba(51, 149, 163, 0.05) 100%
      )
      /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */,
    radial-gradient(
        51.28% 26.09% at 53.3% 108.27%,
        #33a36d 0%,
        rgba(51, 122, 163, 0.05) 0.01%
      )
      /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */,
    radial-gradient(
      21.19% 40.1% at 100.03% 0%,
      rgba(74, 192, 239, 0.1) 0%,
      rgba(41, 92, 91, 0.1) 100%
    ),
    radial-gradient(
        24.63% 49.68% at 0% 3.09%,
        #4bc1eb 0%,
        rgba(51, 142, 163, 0.05) 100%
      )
      /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */,
    radial-gradient(
      24.21% 39.21% at 0% 0%,
      rgba(255, 255, 255, 0.81) 0%,
      rgba(255, 255, 255, 0.19) 100%
    ),
    linear-gradient(0deg, rgba(255, 255, 255, 0.13), rgba(255, 255, 255, 0.13));
`;
