import { Injectable } from '@nestjs/common';
//@Injectableとは、DIコンテナに登録するためのデコレータ
//DIコンテナとは、依存性の注入を行うためのコンテナ
//依存性の注入とは、クラスの依存関係をコンストラクタで明示的に表現すること
//依存関係とは、クラスが他のクラスのインスタンスを利用すること
//依存関係を明示的に表現することで、クラスのテストが容易になる
//
@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
}
