import { capitalize, Stack, Typography } from "@mui/material";
import { cleanUnderscore, pascalCase } from "utility/helpers";
import HtmlTooltip from "components/Tooltip";
import { IconWithText } from "components/common/styles";
import ProgressBar from "components/common/ProgressBar";
import Box from "@mui/material/Box";

const Statues = ({ statues }) => {
  return (
    <Stack sx={{ height: 'fit-content' }} flexWrap={'wrap'} direction={'row'} justifyContent={'center'} gap={2}>
      {statues?.map((statue, index) => {
        const { name, rawName, level } = statue;
        return <Box key={name + index}>
          <HtmlTooltip title={<StatueTooltip {...statue} />}>
            <IconWithText stat={level} icon={rawName} img={{ style: { width: 40, height: 50, objectFit: 'contain' } }}/>
          </HtmlTooltip>
        </Box>;
      })}
    </Stack>
  );
};

const StatueTooltip = ({ effect, bonus, talentMulti, name, level, progress }) => {
  const calcBonus = Math.round(level * bonus * talentMulti);
  const nextLv = Math.round(Math.pow(level, 1.17) * Math.pow(1.35, level / 10) + 1);
  const desc = cleanUnderscore(pascalCase(effect?.replace(/(%?)(@)/, '$2$1_').replace('@', calcBonus)));
  return <>
    <Typography fontWeight={'bold'} variant={'h5'}>{capitalize(cleanUnderscore(name.toLowerCase()))}</Typography>
    <Typography variant={'body1'}>{desc}</Typography>
    <ProgressBar percent={progress / nextLv * 100} label={false}/>
    <Typography variant={'body2'}>{Math.floor(progress)} / {nextLv}</Typography>
  </>
};

export default Statues;
