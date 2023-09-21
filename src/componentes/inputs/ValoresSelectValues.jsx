export const ValoresSelectValues = ({ data, value, label }) => {
  return (
    <>
      <option value=""></option>
      {data?.map((item, index) => {
        return (
          <option value={item?.[value] || item} key={index + item?.[value] || item}>
            {item?.[label] || item}
          </option>
        );
      })}
    </>
  );
};
