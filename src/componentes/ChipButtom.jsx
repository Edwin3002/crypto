/* eslint-disable react/prop-types */
import FlexBox from './FlexBox'
import { Paragraph } from './Typography'

const ChipButtom = ({title, notificacion}) => {
  return (
    <FlexBox
      alignItems="center"
      flexDirection="row"
      sx={{
        backgroundColor: "primary.main",
        borderRadius: "6.25rem",
        cursor: "pointer",
        "&:hover": {
          backgroundColor: "primary.light",
        },
        transition: "all 0.3s ease-in-out"
      }}
      p={1}
      px={2}
      width="fit-content"
      onClick={notificacion}
    >
      <Paragraph sx={{color: "white", fontWeight: 400}}>{title}</Paragraph>
    </FlexBox>
  )
}

export default ChipButtom