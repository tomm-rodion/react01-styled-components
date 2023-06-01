import {
  TransacticsWrapper,
  ThElement,
  TdElement,
  TrElement,
} from './Transactics.styled';

export const Transactics = ({ transactics }) => {
  return (
    <>
      <TransacticsWrapper>
        <thead>
          <TrElement>
            <ThElement>Type</ThElement>
            <ThElement>Amount</ThElement>
            <ThElement>Currency</ThElement>
          </TrElement>
        </thead>

        <tbody>
          {transactics.map(({ id, type, amount, currency }) => {
            return (
              <TrElement key={id}>
                <TdElement>{type}</TdElement>
                <TdElement>{amount}</TdElement>
                <TdElement>{currency}</TdElement>
              </TrElement>
            );
          })}
        </tbody>
      </TransacticsWrapper>
    </>
  );
};
