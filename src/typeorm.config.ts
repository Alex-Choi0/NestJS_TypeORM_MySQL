// TypeORM의 option 설정
import { TypeOrmModuleOptions } from '@nestjs/typeorm';
require('dotenv').config(); // .env파일 적용을 위해 npm 추가

// TypeORM과 DataBase를 연결하기 위한 셋팅
export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'mysql', // 데이터베이스 타입
  host: process.env.DATABASE_HOST, // 주소
  port: Number(process.env.DATABASE_PORT), // 데이터베이스 포스트
  username: process.env.DATABASE_USER, // 데이터베이스 소유자 이름
  password: process.env.DATABASE_PASS, // 데이터베이스 비밀번호
  database: process.env.DATABASE_DB, // 데이터베이스 이름
  autoLoadEntities: true, // 자동으로 entities를 DB에 배포
  synchronize: true, // 동기화(Production에서는 false으로 지정해야함)
};
