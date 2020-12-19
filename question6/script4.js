function example() {
    const canvas = useRef(null);
    useEffect(() => {
      const cfg = {
          type: 'scatter',
          data: {
              datasets: [{
                  label: 'Scatter Dataset',
                  data: [{
                      x: -10,
                      y: 0
                  }, {
                      x: 0,
                      y: 10
                  }, {
                      x: 10,
                      y: 5
                  }, {
                      x: 0.5,
                      y: 5.5
                  }],
                  backgroundColor: 'rgb(255, 99, 132)'
              }],
          },
          options: {
              scales: {
                  x: {
                      type: 'linear',
                      position: 'bottom'
                  }
              }
          }
      };
      const chart = new Chart(canvas.current.getContext('2d'), cfg);
      return () => chart.destroy();
    });
    return <div className="chartjs-wrapper"><canvas ref={canvas} className="chartjs"></canvas></div>;
}