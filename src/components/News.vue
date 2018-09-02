<template>
  
  <div class="news">
    <NewsTableHeader />
    <div class="news__day" v-for="{ dayName, list, endOfDayMs } in filteredNewsList" :key="endOfDayMs">
      <h4 class="news__day-name">{{dayName}}</h4>
      <ul class="news__items">
        <li class="news__item" v-for="{ Importance, EventName, CurrencyCode, formattedTime, PreviousValue, ForecastValue, ActualValue, ImpactDirection, Id, Url } in list" :key="Id">
          <div class="news__wrap" @click="toggleHistoricDataChart(Id, Url)">
            <div class="news__time">
              {{formattedTime}}
            </div>
            <div class="news__currency">
              {{CurrencyCode}}
            </div>
            <div class="news__name news__name--cut">
              <span class="news__importance" :class="`news__importance--${Importance}`"></span>
              <span class="news__name-text">{{EventName}}</span>
            </div>
            <div class="news__previous">
              {{PreviousValue}}
            </div>
            <div class="news__forecast">
              {{ForecastValue}}
            </div>
            <div class="news__actual" :class="`news__actual--${ImpactDirection}`">
              <strong>{{ActualValue}}</strong>
            </div>
          </div>
          <div class="news__chart" v-if="ui.expandedCharts.indexOf(Id) >= 0">
            
              <div v-if="historicData[Id] && historicData[Id].length">
                  
                 <Chart :raw="historicData[Id]" />

              </div>
              <h4 v-else>...</h4>

          </div>
        </li>
      </ul>
    </div>

  </div>
</template>

<script>

import { mapState, mapGetters, mapActions } from 'vuex';
import NewsTableHeader from './NewsTableHeader.vue';

export default {
  name: 'News',
  components: {
    NewsTableHeader,
    Chart: () => import('./Chart.vue')
  },
  data: () => ({
    ui: {
      expandedCharts: []
    }
  }),
  computed: {
    ...mapState([
      'newsList',
      'historicData',
    ]),
    ...mapGetters([
      'filteredNewsList'
    ])
  },
  methods: {
    ...mapActions([
      'fetchHistoricData',
    ]),
    toggleHistoricDataChart(id, url) {

      const idIndex = this.ui.expandedCharts.indexOf(id);
      const isExpanded = idIndex >= 0;

      if (isExpanded) {

        this.ui.expandedCharts.splice(idIndex, 1);

      } else {
        this.ui.expandedCharts.push(id);

        if (!this.historicData[id]) {
          this.fetchHistoricData({newsItemId: id, newsItemUrl: url})
        }

      }

    },
  }
}

</script>

<style>
  
  .news {
    max-width: 960px;
    margin: 25px auto 100px auto;
    font-size: 14px;
  }
  
  .news__day-name {
    background-color: #6b6b6b;
    color: #fff;
    padding: 10px;
    font-weight: normal;
    text-align: center;
  }

  .news__wrap {
    display: flex;
    align-items: center;
    padding: 10px;
    border-bottom: 1px solid #ededed;
  }
  
  .news__item:nth-child(odd) {
    background-color: #fff;
  }

  .news__item:nth-child(even) {
    background-color: #f3f3f3;
  }
  
  .news__item:hover {
    background-color: #e6e6e6;
  }

  .news__time {
    flex: 0 0 60px;
    text-align: center;
  }

  .news__currency {
    flex: 0 0 70px;
    padding: 0 10px;
    text-align: center;
  }
  
  .news__importance {
    display: inline-block;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    margin-right: 2px;
    background-color: #b9b9b9;
  }

  .news__importance--low {
    background-color: #00c700;
  }

  .news__importance--medium {
    background-color: #ffa500;
  }

  .news__importance--high {
    background-color: #ff5050;
  }

  .news__name {
    flex: 0 0 500px;
    padding: 0 10px;
  }
  
  .news__name--cut {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .news__previous,
  .news__forecast,
  .news__actual {
    flex: 1 0 5%;
    padding: 0 10px;
    text-align: center;
  }

  .news__actual--1 {
    color: #00a000;
  }

  .news__actual--2 {
    color: #ff5050;
  }
  
  .news__chart {
    height: 200px;
    text-align: center;
    line-height: 200px;
  }

</style>
