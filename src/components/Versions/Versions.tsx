import React, { useContext } from 'react';
import { useTranslation } from 'react-i18next';

import { DetailContext } from '../../pages/Version';
import { DIST_TAGS } from '../../../lib/constants';

import { StyledText } from './styles';
import VersionsTagList from './VersionsTagList';
import VersionsHistoryList from './VersionsHistoryList';
const Versions: React.FC = () => {
  const detailContext = useContext(DetailContext);
  const { t } = useTranslation();

  const { packageMeta, packageName } = detailContext;

  if (!packageMeta) {
    return null;
  }

  const { versions = {}, time = {}, [DIST_TAGS]: distTags = {} } = packageMeta;

  return (
    <>
      {distTags && Object.keys(distTags).length > 0 && (
        <>
          <StyledText variant="subtitle1">{t('versions.current-tags')}</StyledText>
          <VersionsTagList tags={distTags} />
        </>
      )}
      {versions && Object.keys(versions).length > 0 && packageName && (
        <>
          <StyledText variant="subtitle1">{t('versions.version-history')}</StyledText>
          <VersionsHistoryList packageName={packageName} time={time} versions={versions} />
        </>
      )}
    </>
  );
};

export default Versions;
