import { isActiveHoursIntersecting } from '../utils/isActiveHoursIntersecting';
import type { BranchFilterSettings, Response } from '../types/types';
import { getFilterActiveHours } from '../utils/getFilterActiveHours';
import { getBranchActiveHours } from '../utils/getBranchActiveHours';
import { getCurrentWeekDay } from '../utils/getCurrentWeekDay';
import { useCallback, useEffect, useState } from 'react';
import type { Dispatch, SetStateAction } from 'react';

export const useBranchFilter = (
  branchFilterSettings: BranchFilterSettings,
  setBranchFilterSettings: Dispatch<SetStateAction<BranchFilterSettings>>
) => {
  const [branchs, setBranchs] = useState<Response['locations']>([]);

  const fetchBranchs = async () => {
    try {
      const response = await fetch('/mock.json');
      const { locations }: Response = await response.json();
      return locations.filter(({ schedules }) => schedules);
    } catch (error) {
      console.error(error);
      return [];
    }
  };

  const resetBranchFilter = useCallback(async () => {
    const data = await fetchBranchs();

    setBranchs(data);
    setBranchFilterSettings((prev) => ({ ...prev, branchCount: data.length }));
  }, [setBranchFilterSettings]);

  const updateBranchFilter = async () => {
    const data = await fetchBranchs();

    const branchs = data.filter(({ opened, schedules }) => {
      const branchStatus = !branchFilterSettings['isClosedBranchFilterActive']
        ? opened === true
        : opened === false || opened === true;

      if (!schedules) return;
      if (!branchFilterSettings['timeOfDay']) return branchStatus;

      return schedules.some(({ hour, weekdays }) => {
        const [filterStart, filterEnd] = getFilterActiveHours(branchFilterSettings['timeOfDay']);
        const [branchStart, branchEnd] = getBranchActiveHours(hour);

        return (
          isActiveHoursIntersecting([filterStart, filterEnd], [branchStart, branchEnd]) &&
          weekdays === getCurrentWeekDay() &&
          branchStatus
        );
      });
    });

    setBranchs(branchs);
    setBranchFilterSettings((prev) => ({ ...prev, branchCount: branchs.length }));
  };

  useEffect(() => {
    resetBranchFilter();
  }, [resetBranchFilter]);

  return { branchs, updateBranchFilter, resetBranchFilter };
};
