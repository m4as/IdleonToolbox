import React, { useContext, useState } from 'react';
import { AppContext } from "components/common/context/AppProvider";
import { Card, CardContent, Stack, Tab, Tabs, Typography, useMediaQuery } from "@mui/material";
import Artifacts from "components/account/Worlds/World5/Sailing/Artifacts";
import LootPile from "../../../components/account/Worlds/World5/Sailing/LootPile";
import { prefix } from "../../../utility/helpers";
import Chests from "../../../components/account/Worlds/World5/Sailing/Chests";
import BoatsAndCaptains from "../../../components/account/Worlds/World5/Sailing/BoatsAndCaptains";
import { MissingData } from "../../../components/common/styles";
import { NextSeo } from "next-seo";
import Trades from "../../../components/account/Worlds/World5/Sailing/Trades";

const Sailing = () => {
  const { state } = useContext(AppContext);
  const {
    artifacts,
    lootPile,
    maxChests,
    captains,
    boats,
    chests,
    captainsOnBoats,
    trades,
    shopCaptains
  } = state?.account?.sailing || {};
  const [selectedTab, setSelectedTab] = useState(0);
  const isMd = useMediaQuery((theme) => theme.breakpoints.down('md'), { noSsr: true });
  const handleOnClick = (e, selected) => {
    setSelectedTab(selected);
  }
  if (!state?.account?.sailing) return <MissingData name={'sailing'}/>;
  return <>
    <NextSeo
      title="Idleon Toolbox | Sailing"
      description="Keep track of your artiacts, boats and captains and their bonuses"
    />
    <Typography variant={'h2'} textAlign={'center'} mb={3}>Sailing</Typography>
    <Stack mb={2} direction={'row'} gap={1}>
      <Card>
        <CardContent>
          <Stack sx={{ width: 200 }} direction={'row'} gap={1} alignItems={'center'}>
            <img style={{ width: 50, objectFit: 'contain' }} src={`${prefix}npcs/Chesty.gif`} alt=""/>
            Chests: {chests?.length || 0} / {maxChests}
          </Stack>
        </CardContent>
      </Card>
      <Card>
        <CardContent>
          <Stack sx={{ width: 200 }} direction={'row'} gap={1} alignItems={'center'}>
            <img style={{ width: 28, objectFit: 'contain' }} src={`${prefix}npcs/Captain.gif`} alt=""/>
            Captains: {captains?.length}
          </Stack>
        </CardContent>
      </Card>
      <Card>
        <CardContent>
          <Stack sx={{ width: 200 }} direction={'row'} gap={1} alignItems={'center'}>
            <img style={{ width: 42, objectFit: 'contain' }} src={`${prefix}npcs/Boat.gif`} alt=""/>
            Boats: {boats?.length}
          </Stack>
        </CardContent>
      </Card>
    </Stack>

    <Tabs centered
          sx={{ marginBottom: 3 }}
          variant={isMd ? 'fullWidth' : 'standard'}
          value={selectedTab} onChange={handleOnClick}>
      {['Artifacts', 'Trades', 'Boats and Captains', 'Loot Pile', 'Chests']?.map((tab, index) => {
        return <Tab label={tab} key={`${tab}-${index}`}/>;
      })}
    </Tabs>

    {selectedTab === 0 ? <Artifacts artifacts={artifacts}/> : null}
    {selectedTab === 1 ? <Trades trades={trades} lastUpdated={state?.lastUpdated}/> : null}
    {selectedTab === 3 ? <LootPile lootPile={lootPile}/> : null}
    {selectedTab === 2 ?
      <BoatsAndCaptains boats={boats} captains={captains}
                        lootPile={lootPile}
                        captainsOnBoats={captainsOnBoats} shopCaptains={shopCaptains}
                        lastUpdated={state?.lastUpdated}/> : null}
    {selectedTab === 4 ? <Chests chests={chests}/> : null}
  </>
};

export default Sailing;
